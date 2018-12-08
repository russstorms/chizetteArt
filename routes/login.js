const bcrypt = require('bcryptjs')
const plaintextPassword = process.env.PASS
const someOtherPlaintextPassword = 'not_bacon'

const hash = (password, saltRounds) => {
  return bcrypt.hash(password, saltRounds).then((hash) => {
    console.log(hash)
    return hash
  })
}

const compare = (plaintextPassword, digest) => {
  return bcrypt.compare(plaintextPassword, digest).then(function(res) {
    return res
  })
}

module.exports = { hash, compare }