const express = require('express')
const router = express.Router()
const { jwtVerifyAsync } = require('../node_modules/jsonwebtoken')
const adminService = require('../auth/authServices')
/*
 * Database interactions for user information have been abstracted
 * into `adminService`, which defines methods needed for accessing
 * user information in Postgres via knex.
* */

const admin = new adminService()

/*
 * This `TOKEN_SECRET` must be used to both sign and verify
 * any JWTs supplied by this API.
* */

const { TOKEN_SECRET } = process.env

/*
 * Currently this route handler will send back all of the usernames
 * in the database for anyone who sends a request. Instead, it should
 * only send the usernames is the requester provides a valid JWT whose
 * payload indicates that the requester is logged in.
* */

router.get('/admin', (req, res) => {
  let token = req.headers.auth
  if (!token){
    return res.status(403).send(`No token`)
  }
  let splitToken = token.split(' ')

  jwtVerifyAsync(splitToken[1], TOKEN_SECRET)
  .then(response => {
    if (response.loggedIn === true){
      admin.getNames()
      .then(names => {
        res.json(names)
      })
      .catch(err => {
        res.status(500).send(`There was an error getting user names: ${err}`)
      })
    }
  })
  .catch(err => {
    res.status(403).send({ message: `error`})
  })
  
})

router.get('/admin/:id', (req, res) => {
    let token = req.headers.auth
    if (!token){
      return res.status(403).send(`No token`)
    }
    let splitToken = token.split(' ')
  
    jwtVerifyAsync(splitToken[1], TOKEN_SECRET)
    .then(response => {

      if (req.params.id == response.sub.id){
        admin.getSecretFor(req.params.id)
        .then(secret => {
          res.json(secret)
        })
        .catch(err => {
          res.status(500).send(`There was an error getting the secret ${err}`)
        })
      } else {
        res.status(403).send(`error`)
      }
    })
    .catch(err => {
      res.status(403).send({ message: `error`})
    })
})

module.exports = router