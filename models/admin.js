const bcrypt = require('bcryptjs')
const saltRounds = 10
const plainTextPassword = 'process.env.PASS'

const admin = () => {
  bcrypt
  .genSalt(saltRounds)
  .then(salt => {
    console.log(`Salt: ${salt}`)

    return bcrypt.hash(plainTextPassword, salt)
  })
  .then(hash => {
    console.log(`Hash: ${hash}`)

    //Store hash in password DB
  })
  .catch(err => console.error(err.message))

}
  module.exports = admin