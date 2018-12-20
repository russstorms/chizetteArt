exports.seed = function(knex) {
  return knex('admin').del()
    .then(function () {
      return knex('admin').insert([
        {
          id: 1,
          username: 'Chazzy',
          password: '$2a$12$uDWhEe0rlGwCV04XcjSzXuLnb2XowRk4y9F4TH7zLaXRcQ5gM2Ya6'
        }
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('admin_id_seq', (SELECT MAX(id) FROM admin))")
      })
    })
}