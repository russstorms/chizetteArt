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
        description: 'Drawing of a human',
        poster: 'https://placekitten.com/200/300'
      },
      {
        id: 2,
        title: 'Gem Painting',
        year: 2018,
        medium: 'Acrylic Paint',
        description: 'A gem I found!',
        poster: 'https://placekitten.com/200/300'
      },
      {
        id: 3,
        title: 'Animal Painting',
        year: 2018,
        medium: 'Oil Paint',
        description: 'Wanted to cuddle with animals today :)',
        poster: 'https://placekitten.com/200/300'
      },
      {
        id: 4,
        title: 'Rough Sketch',
        year: 2018,
        medium: 'Charcoal',
        description: 'No colors today, just sketches!',
        poster: 'https://placekitten.com/200/300'
      },
      {
        id: 5,
        title: 'Animal Drawing',
        year: 2018,
        medium: 'Graphite',
        description: 'I love animals the most.',
        poster: 'https://placekitten.com/200/300'
      },
      {
        id: 6,
        title: 'Face',
        year: 2018,
        medium: 'Water Color',
        description: 'Faces and hands are so tough!',
        poster: 'https://placekitten.com/200/300'
      },
      {
        id: 7,
        title: 'Gem and Body',
        year: 2018,
        medium: 'Gouache',
        description: 'Love drawing these two together...',
        poster: 'https://placekitten.com/200/300'
      }
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('chizetteart_id_seq', (SELECT MAX(id) FROM chizetteart))")
      })
    })
}