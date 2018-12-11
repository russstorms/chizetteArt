const bcrypt = require('bcryptjs')
const saltRounds = 12
const pass = 'process.env.PASS'

const admin = () => {
  bcrypt
  .genSalt(saltRounds)
  .then(salt => {
    // console.log(`Salt: ${salt}`)

    return bcrypt.hash(pass, salt)
  })
  .then(hash => {
    // console.log(`Hash: ${hash}`)

    //Store hash in password DB
  })
  .catch(err => console.error(err.message))

}
  module.exports = admin