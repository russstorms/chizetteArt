exports.up = function(knex) {
    return knex.schema.createTable('admin', table => {
      table.increments('id').primary()
      table.string('username').notNull()
      table.string('secret').notNull()
      table.string('password').notNull()
      table.timestamps(true, true)
    })
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTable('admin')
  }