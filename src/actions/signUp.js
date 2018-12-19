const knex = require('../../knex')

//// CREATE NEW USER IN ADMIN TABLE \\\\
const createAdmin = (username, password) => {
  let newObj = {
    username: username,
    password: password
  }
  
  //// IF ADMIN ISN'T IN DB, ADD ADMIN \\\\
  return knex('admin')
    .where('username', username)
    .insert(newObj)
    .returning('*')
    .then(user => user[0])
    .catch(err => Promise.reject(err))
}

module.exports = {createAdmin}