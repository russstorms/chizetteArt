exports.up = function(knex, Promise) {
    return knex.schema.createTable('chizetteart', function(table) {
      // TABLE COLUMN DEFINITIONS HERE
      table.increments()
      table.string('title').notNullable().defaultTo('')
      table.integer('year').notNullable().defaultTo(2018)
      table.string('medium').notNullable().defaultTo('')
      table.string('poster').defaultTo('https://placekitten.com/200/300')
      table.timestamps(true, true)
    })
  }
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('chizetteart')
  }