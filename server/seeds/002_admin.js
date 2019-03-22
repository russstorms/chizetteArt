exports.seed = function(knex) {
  return knex('admin').del()
    .then(function () {
      return knex('admin').insert([
        {
          id: 1,
          username: 'Chazzy',
          password: '$2a$12$7OANF4xvpDnplvoAsBHYF.QJ6kpKz/2Js9GQksAvxXV6276Bnkcaa'
        }
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('admin_id_seq', (SELECT MAX(id) FROM admin))")
      })
    })
}