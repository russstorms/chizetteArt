exports.seed = function(knex) {
  return knex('admin').del()
    .then(function () {
      return knex('admin').insert([
        {
          id: 1,
          username: 'Chizzy',
          secret: 'Are you me?',
          // plain text password is ''
          password: ''
        }
      ])
    })
}