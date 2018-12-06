const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const { jwtSignAsync } = require('../utils/jsonwebTokenAsync')
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


router.use(bodyParser.json())

router.post('/login', (req, res) => {

  if (!req.body.username || !req.body.password){
    return res.status(401).send({ message: `No Way!` })
  }

  admin.tryLoginAdmin(req.body.username, req.body.password)
  .then(valid => {

    if(!valid){
      return res.status(403).send({ message : `Not found` })
    }

    admin.getUser(req.body.username)
    .then(adminInfo => {
      let payload = { 
      sub: adminInfo,
      loggedIn: true,
      exp: Date.now() + (1000 * 60 * 60 * 24 * 7)
      }
      jwtSignAsync(payload, TOKEN_SECRET)
      .then(token => {
        return res.set('Auth', `Bearer: ${token}`).send('password correct, JWT set in Auth header')
      })
    })
  })
})

module.exports = router