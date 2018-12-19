const passport = require('passport')
require('dotenv').config();
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const {findUserById, verifyUser} = require('../src/actions/signIn')
const LocalStrategy = require('passport-local')
const bcrypt = require('bcryptjs')

//// CREATE LOCAL STRATEGY -- LOG USER IN ON SERVER \\\\
const localOptions = {usernameField: 'email'}

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  return verifyUser(email)
    .then((validUser) => {
      bcrypt.compare(password, validUser.password)
        .then((validPassword) => {
          if (validPassword) {
            return done(null, validUser)
          }
          return done(null, false)
        })
        .catch(err => done(err, false))
    })
})

//// SETUP OPTIONS FOR JWT STRATEGY \\\\

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.SECRET
}

//// CREATE JWT STRATEGY \\\\

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  return findUserById(payload.sub)
    .then((foundUser) => {
      if (foundUser) {
        return done(null, foundUser)
      }
      return done(null, false)
    })
    .catch(err => done(err, false))
})

//// TELL PASSPORT TO USE THIS STRATEGY \\\\

passport.use(jwtLogin)
passport.use(localLogin)