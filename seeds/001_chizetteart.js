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
        title: 'Heart Pendant',
        year: 2021,
        medium: 'Jewelry',
        poster: 'https://images.unsplash.com/photo-1486821416551-68a65ef4d618?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      },
      {
        id: 5,
        title: 'We Are the Same',
        year: 2018,
        medium: 'Charcoal',
        poster: 'https://images.unsplash.com/photo-1504221507732-5246c045949b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      },
      {
        id: 6,
        title: 'In Paris',
        year: 2020,
        medium: 'Photography',
        poster: 'https://images.unsplash.com/photo-1530800089-e0f33f51d5ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      },
      {
        id: 7,
        title: 'Hand',
        year: 2019,
        medium: 'Water Color',
        poster: 'https://images.unsplash.com/photo-1526304760382-3591d3840148?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      },
      {
        id: 8,
        title: 'Gem Pendant',
        year: 2018,
        medium: 'Jewelry',
        poster: 'https://images.unsplash.com/photo-1433979933652-5e766d98ebb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80'
      },
      {
        id: 9,
        title: 'Oops, I Did It Again',
        year: 2021,
        medium: 'Digital',
        poster: 'https://images.unsplash.com/photo-1463277261818-d24c3cdbe40e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
      },
      {
        id: 10,
        title: 'Buddha',
        year: 2022,
        medium: 'Photography',
        poster: 'https://images.unsplash.com/photo-1539106490701-6fa3d7ce6f31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      },
      {
        id: 11,
        title: 'Earrings',
        year: 2020,
        medium: 'Jewelry',
        poster: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
      },
      {
        id: 12,
        title: 'Testing Dimensions',
        year: 2019,
        medium: 'Digital',
        poster: 'https://preview.redd.it/3nw6vqx4q0721.png?width=1024&auto=webp&s=1ab13c48a0443d0de0e5b547cc6d9f8effbe0fa6'
      },
      {
        id: 13,
        title: 'Heart Necklace',
        year: 2019,
        medium: 'Jewelry',
        poster: 'https://images.unsplash.com/photo-1521694139475-da661702d635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      },
      {
        id: 14,
        title: 'Cathedral',
        year: 2021,
        medium: 'Photography',
        poster: 'https://images.unsplash.com/photo-1534465376363-af999395106e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
      },
      {
        id: 15,
        title: 'Sea Turtle',
        year: 2022,
        medium: 'Photography',
        poster: 'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80'
      }
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('chizetteart_id_seq', (SELECT MAX(id) FROM chizetteart))")
      })
    })
}