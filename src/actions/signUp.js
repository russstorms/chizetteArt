const knex = require('../../knex')

//// CREATE NEW USER IN USERS TABLE \\\\
const createUser = (username, email, password) => {
  let newObj = {
    username: username,
    email: email,
    password: password
  }
  
  //// IF EMAIL ISN'T IN DB, ADD NEW USER \\\\
  return knex('users')
    .where('email', email)
    .insert(newObj)
    .returning('*')
    .then(user => user[0])
    .catch(err => Promise.reject(err))
}

module.exports = {createUser}