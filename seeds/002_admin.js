exports.seed = function(knex) {
  return knex('admin').del()
    .then(function () {
      return knex('admin').insert([
        {
          id: 1,
          username: 'Chizzy',
          secret: 'Are you me?',
          // plain text password is 'Hashedpassword'
          password: '$2a$10$.n6eOdpv6sPDPxZXAVGtDeIYoQFTt9aRL0gCLO0zWKTPfcjgrQEIO'
        }
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('admin_id_seq', (SELECT MAX(id) FROM admin))")
      })
    })
}