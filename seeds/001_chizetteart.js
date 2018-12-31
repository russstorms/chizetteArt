exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chizetteart').del()
    .then(function() {
      // Inserts seed entries
      return knex('chizetteart').insert([{
        id: 1,
        title: 'Gem Painting',
        year: 2018,
        medium: 'Acrylic Paint',
        poster: 'https://images.unsplash.com/photo-1529666759085-741eefcd3371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80'
      },
      {
        id: 2,
        title: 'Where the Heart Is',
        year: 2020,
        medium: 'Gouache',
        poster: 'https://images.unsplash.com/photo-1533158388470-9a56699990c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
      },
      {
        id: 3,
        title: 'Rosé',
        year: 2021,
        medium: 'Water Color',
        poster: 'https://images.unsplash.com/photo-1530903677198-7c9f3577a63e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1462&q=80'
      },
      {
        id: 4,
        title: 'We Are the Same',
        year: 2018,
        medium: 'Charcoal',
        poster: 'https://images.unsplash.com/photo-1504221507732-5246c045949b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      },
      {
        id: 5,
        title: 'In Paris',
        year: 2020,
        medium: 'Photography',
        poster: 'https://images.unsplash.com/photo-1530800089-e0f33f51d5ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      },
      {
        id: 6,
        title: 'Face',
        year: 2019,
        medium: 'Spray Paint',
        poster: 'https://images.unsplash.com/photo-1503416858304-41dc04946371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1935&q=80'
      },
      {
        id: 7,
        title: 'Oops, I Did It Again',
        year: 2021,
        medium: 'Spray Paint',
        poster: 'https://images.unsplash.com/photo-1463277261818-d24c3cdbe40e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
      },
      {
        id: 8,
        title: 'Buddha',
        year: 2022,
        medium: 'Photography',
        poster: 'https://images.unsplash.com/photo-1539106490701-6fa3d7ce6f31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      },
      {
        id: 9,
        title: 'Testing Dimensions',
        year: 2019,
        medium: 'Digital',
        poster: 'https://preview.redd.it/3nw6vqx4q0721.png?width=1024&auto=webp&s=1ab13c48a0443d0de0e5b547cc6d9f8effbe0fa6'
      }
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('chizetteart_id_seq', (SELECT MAX(id) FROM chizetteart))")
      })
    })
}