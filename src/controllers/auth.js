const jwt = require('jwt-simple')
require('dotenv').config()
// const {createAdmin} = require('../actions/signUp')
const bcrypt = require('bcryptjs')

//// TAKES IN USER OBJECT, RETURNS ENCODED TOKEN \\\\
const tokenForAdmin = (admin) => {
  return jwt.encode({id: admin.id}, process.env.PASSWORD)
}

//// TAKES IN LOGGED USER AND CALLS tokenForAdmin() TO SEND TOKEN ALONG TO FRONT END \\\\
const signin = (req, res, next) => {
  let token = tokenForAdmin(req.admin)
  res.set('Auth', `Bearer: ${token}`).status(200).json( req.admin )
}

//// GRAB USER DATA FROM SIGN UP FORM \\\\
// const signup = (req, res, next) => {

//   const {username, password} = req.body
  const saltRounds = 12

  if (!username || !password) {
    res.status(422).send({error: `You must provide an username and a password.`})
  }
  //// SEE IF ADMIN WITH THE GIVEN USERNAME EXISTS \\\\
  bcrypt.hash(password, saltRounds)
    .then((hash) => {
      console.log(hash)
      return createAdmin(username, hash)
        .then((newAdmin) => {
          res.json({token: tokenForAdmin(newAdmin)})
        })
        .catch((err) => {
          res.json({error: `Error saving user to database.`})
        })
    })
    .catch((err) => {
      return next(err)
    })
// }

module.exports = {signup, signin}