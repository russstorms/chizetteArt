exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chizetteart').del()
    .then(function() {
      // Inserts seed entries
      return knex('chizetteart').insert([{
        id: 1,
        title: 'Gem Painting',
        year: 2018,
        medium: 'Acrylic',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/file-1.jpeg',
        price: 45
      },
      {
        id: 2,
        title: 'Where the Heart Is',
        year: 2020,
        medium: 'Gouache',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/file-2.jpeg',
        price: 35
      },
      {
        id: 3,
        title: 'Rosé',
        year: 2021,
        medium: 'Water Color',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/file-3.jpeg',
        price: 30
      },
      {
        id: 4,
        title: 'Heart Pendant',
        year: 2021,
        medium: 'Jewelry',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/file-4.jpeg',
        price: 40
      },
      {
        id: 5,
        title: 'We Are the Same',
        year: 2018,
        medium: 'Charcoal',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/file.jpeg',
        price: 50
      },
      {
        id: 6,
        title: 'In Paris',
        year: 2020,
        medium: 'Photography',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/file1-1.jpeg',
        price: 30
      },
      {
        id: 7,
        title: 'Hand',
        year: 2019,
        medium: 'Water Color',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/file1-2.jpeg',
        price: 30
      },
      {
        id: 8,
        title: 'Gem Pendant',
        year: 2018,
        medium: 'Jewelry',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/file1-3.jpeg',
        price: 45
      },
      {
        id: 9,
        title: 'Oops, I Did It Again',
        year: 2021,
        medium: 'Digital',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/file1-4.jpeg',
        price: 25
      },
      {
        id: 10,
        title: 'Buddha',
        year: 2022,
        medium: 'Photography',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/file1.jpeg',
        price: 30
      },
      {
        id: 11,
        title: 'Testing Dimensions',
        year: 2019,
        medium: 'Digital',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/file2.jpeg',
        price: 40
      }
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('chizetteart_id_seq', (SELECT MAX(id) FROM chizetteart))")
      })
    })
}