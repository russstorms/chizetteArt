// const knex = require('../knex')
// const bcrypt = require('bcryptjs')

// class adminService {

//   getAdminName() {
//     return knex('admin')
//       .select('username')
//   }

//   getSecretFor(id) {
//     return knex('admin')
//       .select('secret')
//       .first()
//       .where({id})
//   }

//   getUser(username) {
//     return knex('admin')
//       .first()
//       .where({username})
//   }

//   tryLoginAdmin(username, password) {
//     return knex('admin')
//       .select('password')
//       .first()
//       .where({username})
//       .then(queryResult => {
//         if (!queryResult) return false
//         return bcrypt.compare(password, queryResult.password).then(function(res) {
//           return res
//         })
//       })
//   }
// }

// module.exports = adminService