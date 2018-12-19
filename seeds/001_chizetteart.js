exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chizetteart').del()
    .then(function() {
      // Inserts seed entries
      return knex('chizetteart').insert([{
        id: 1,
        title: 'Human Drawing',
        year: 2018,
        medium: 'Gouache',
        poster: 'https://placekitten.com/200/300'
      },
      {
        id: 2,
        title: 'Gem Painting',
        year: 2018,
        medium: 'Acrylic Paint',
        poster: 'https://placekitten.com/200/300'
      },
      {
        id: 3,
        title: 'Animal Painting',
        year: 2018,
        medium: 'Oil Paint',
        poster: 'https://placekitten.com/200/300'
      },
      {
        id: 4,
        title: 'Rough Sketch',
        year: 2018,
        medium: 'Charcoal',
        poster: 'https://placekitten.com/200/300'
      },
      {
        id: 5,
        title: 'Animal Drawing',
        year: 2018,
        medium: 'Graphite',
        poster: 'https://placekitten.com/200/300'
      },
      {
        id: 6,
        title: 'Face',
        year: 2018,
        medium: 'Water Color',
        poster: 'https://placekitten.com/200/300'
      },
      {
        id: 7,
        title: 'Gem and Body',
        year: 2018,
        medium: 'Gouache',
        poster: 'https://placekitten.com/200/300'
      }
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('chizetteart_id_seq', (SELECT MAX(id) FROM chizetteart))")
      })
    })
}