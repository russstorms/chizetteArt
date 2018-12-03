exports.up = function(knex, Promise) {
    return knex.schema.createTable('admin', function(table) {
      // TABLE COLUMN DEFINITIONS HERE
      table.increments()
      table.string('admin').notNullable().defaultTo('')
      table.string('pass').notNullable().defaultTo('')
      table.timestamps(true, true)
    })
  }
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('admin')
  }
