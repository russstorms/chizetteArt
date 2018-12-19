const knex = require('../../knex')

//// FIND USER IN DATABASE ON LOGIN \\\\
const findUserById = (id) => {
  return knex('admin')
    .where('id', id)
    .then(user => {
      return user[0]
    })
    .catch(err => {
      console.log(`signIn error: ${err}`)
      Promise.reject(err)
    })
}

//// CHECK USER IN DATABASE \\\\
const verifyUser = (email) => {
  return knex('admin')
  .where('username', username)
  .then(username => {
    return username[0]
  })
  .catch(err => {
    console.log(`verifyUser error: ${err}`)
    Promise.reject(err)
  })
}

module.exports = {findUserById, verifyUser}