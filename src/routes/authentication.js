const express = require('express')
const passport = require('passport')
const authentication = require('../controllers/auth')
const requireSignIn = passport.authenticate('local', {session: false})
const router = express.Router()

//// SIGNIN AUTH \\\\
router.get('/sign-up', (req, res) => {
  res.render('authentication/sign-up')
})

router.post('/sign-up', authentication.signup)

router.get('/sign-in', (req, res) => {
  res.render('authentication/sign-in')
})

router.post('/sign-in', requireSignIn, authentication.signin)

module.exports = router