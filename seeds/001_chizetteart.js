exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chizetteart').del()
    .then(function() {
      // Inserts seed entries
      return knex('chizetteart').insert([{
        id: 1,
        title: 'Amethyst',
        year: 2018,
        medium: 'Gouache',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/amethyst.jpeg',
        price: 26
      },
      {
        id: 2,
        title: 'Aqua Gems',
        year: 2020,
        medium: 'Gouache',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/aqua_gems.jpeg',
        price: 26
      },
      {
        id: 3,
        title: 'Aragonite Necklace',
        year: 2018,
        medium: 'Jewelry',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/aragonite_necklace.JPG',
        price: 50
      },

      {
        id: 4,
        title: 'Aragonite Lady',
        year: 2021,
        medium: 'Gouache',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/aragonite_lady.jpeg',
        price: 26
      },
      {
        id: 5,
        title: 'Aquarelle Lady',
        year: 2021,
        medium: 'Aquarelle Pencil',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/aquarelle_lady.jpeg',
        price: 26
      },
      {
        id: 6,
        title: 'Citrine Amethyst',
        year: 2020,
        medium: 'Jewelry',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/citrine_amethyst.JPG',
        price: 30
      },
      {
        id: 7,
        title: 'Flourite',
        year: 2019,
        medium: 'Jewelry',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/flourite.jpeg',
        price: 30
      },
      {
        id: 8,
        title: 'Flourite Necklace',
        year: 2018,
        medium: 'Jewelry',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/flourite2.JPG',
        price: 45
      },
      {
        id: 9,
        title: 'Gem Outlines',
        year: 2021,
        medium: 'Gouache',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/gem_outlines.jpeg',
        price: 26
      },
      {
        id: 10,
        title: 'Gem Outlines Man',
        year: 2022,
        medium: 'Gouache',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/gem_outlines_man.jpeg',
        price: 26
      },
      {
        id: 11,
        title: 'Geode',
        year: 2019,
        medium: 'Gouache',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/geode.jpeg',
        price: 27
      },
      {
        id: 12,
        title: 'Jimmie',
        year: 2019,
        medium: 'Photography',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/jimmie.jpeg',
        price: 40
      },
      {
        id: 13,
        title: 'Lobster',
        year: 2019,
        medium: 'Photography',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/lobster.jpeg',
        price: 40
      },
      {
        id: 14,
        title: 'Maui',
        year: 2019,
        medium: 'Photography',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/maui_plate.jpeg',
        price: 40
      },
      {
        id: 15,
        title: 'Negril Horse',
        year: 2019,
        medium: 'Photography',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/negril_horse.JPG',
        price: 40
      },
      {
        id: 16,
        title: 'Newspaper',
        year: 2019,
        medium: 'Photography',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/newspaper.JPG',
        price: 40
      },
      {
        id: 17,
        title: 'North Shore',
        year: 2019,
        medium: 'Photography',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/north_shore.jpeg',
        price: 40
      },
      {
        id: 18,
        title: 'Rainbow Man',
        year: 2019,
        medium: 'Gouache',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/rainbow_man.jpeg',
        price: 27
      },
      {
        id: 19,
        title: 'Road to Hana',
        year: 2019,
        medium: 'Photography',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/road_to_hana.jpeg',
        price: 40
      },
      {
        id: 20,
        title: 'Roots',
        year: 2019,
        medium: 'Photography',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/roots.jpeg',
        price: 40
      },
      {
        id: 21,
        title: 'Self Portrait',
        year: 2019,
        medium: 'Gouache',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/self_portrait.jpeg',
        price: 32
      },
      {
        id: 22,
        title: 'Shi',
        year: 2019,
        medium: 'Photography',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/shi.jpeg',
        price: 40
      },
      {
        id: 23,
        title: 'Smoky Quartz',
        year: 2019,
        medium: 'Aquarelle Pencil',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/smoky_quartz.jpeg',
        price: 32
      },
      {
        id: 24,
        title: 'Smoky Quartz Lady',
        year: 2019,
        medium: 'Gouache',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/smoky_quartz_lady.jpeg',
        price: 32
      },
      {
        id: 25,
        title: 'Sunset Beach',
        year: 2019,
        medium: 'Photography',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/sunset_beach.jpeg',
        price: 40
      },
      {
        id: 26,
        title: 'Waikiki',
        year: 2019,
        medium: 'Photography',
        poster: 'https://s3-us-west-2.amazonaws.com/chizetteart/chizetteart/waikiki.jpeg',
        price: 40
      }
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('chizetteart_id_seq', (SELECT MAX(id) FROM chizetteart))")
      })
    })
}