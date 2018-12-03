exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('admin').del()
      .then(function() {
        // Inserts seed entries
        return knex('admin').insert([{
          id: 1,
          admin: '',
          pass: 'batman123'
        }
        ])
        .then(function() {
          // Moves id column (PK) auto-incrementer to correct value after inserts
          return knex.raw("SELECT setval('admin_id_seq', (SELECT MAX(id) FROM admin))")
        })
      })
  }