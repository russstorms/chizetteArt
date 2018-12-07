// const bcrypt = require('bcryptjs')
// const saltRounds = 10
// const plainTextPassword = "DFGh5546*%^__90"

// /*
//  * `hash` should use the `bcryptjs` library to hash a given plaintext password,
//  * utilizing the numeber of passed in salt rounds.
// * */

// bcrypt
//   .genSalt(saltRounds)
//   .then(salt => {
//     console.log(`Salt: ${salt}`)

// function hash(password, saltRounds) {
//   return bcrypt.hash(password, saltRounds).then((hash) => {
//     return hash
//   })
// }

// /*
//  * `compare` should use the `bcryptjs` library to return whether or not
//  * the passed in plainTextPassword, when hashed, will be equal to
//  * the already existing passed in digest.
// * */

// function compare(plainTextPassword, digest) {
//   return bcrypt.compare(plainTextPassword, digest).then(function(res) {
//     console.log(`Hash:`, hash)
//     return res
//   })
// }

////BCRYPT\\\\
// const bcrypt = require("bcryptjs")

// bcrypt
//   .genSalt(saltRounds)
//   .then(salt => {
//     console.log(`Salt: ${salt}`)

//     return bcrypt.hash(plainTextPassword1, salt)
//   })
//   .then(hash => {
//     console.log(`Hash: ${hash}`)

//     // Store hash in your password DB.
//   })
//   .catch(err => console.error(err.message))


//   bcrypt
//     .compare(plainTextPassword1, hash)

// module.exports = { hash, compare }