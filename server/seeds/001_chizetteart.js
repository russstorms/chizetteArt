exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chizetteart').del()
    .then(function() {
      // Inserts seed entries

      //// CHANGE QUALITY FROM CLOUDINARY \\\\
      return knex('chizetteart').insert([{
        id: 1,
        title: 'Amethyst',
        year: 2018,
        medium: 'Gouache',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/v1552434625/chizetteArt%20-%20Compressed/amethyst.jpg',
        price: 26
      },
      {
        id: 2,
        title: 'Aqua Gems',
        year: 2020,
        medium: 'Gouache',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/a_hflip,c_scale,w_1000/v1552434608/chizetteArt%20-%20Compressed/aqua_gems.jpg',
        price: 26
      },
      {
        id: 3,
        title: 'Aragonite Necklace',
        year: 2018,
        medium: 'Jewelry',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/v1552434629/chizetteArt%20-%20Compressed/aragonite_necklace.jpg',
        price: 50
      },
      {
        id: 4,
        title: 'Aragonite Lady',
        year: 2021,
        medium: 'Gouache',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/v1552434597/chizetteArt%20-%20Compressed/aragonite_lady.jpg',
        price: 26
      },
      {
        id: 5,
        title: 'Aquarelle Lady',
        year: 2021,
        medium: 'Aquarelle Pencil',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/v1552434608/chizetteArt%20-%20Compressed/aquarelle_lady.jpg',
        price: 26
      },
      {
        id: 6,
        title: 'Citrine Amethyst',
        year: 2020,
        medium: 'Jewelry',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/v1552434635/chizetteArt%20-%20Compressed/citrine_amethyst.jpg',
        price: 30
      },
      {
        id: 7,
        title: 'Flourite',
        year: 2019,
        medium: 'Jewelry',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/v1552434603/chizetteArt%20-%20Compressed/flourite.jpg',
        price: 30
      },
      {
        id: 8,
        title: 'Flourite Necklace',
        year: 2018,
        medium: 'Jewelry',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/v1552434625/chizetteArt%20-%20Compressed/flourite2.jpg',
        price: 45
      },
      {
        id: 9,
        title: 'Gem Outlines',
        year: 2021,
        medium: 'Gouache',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/v1552434626/chizetteArt%20-%20Compressed/gem_outlines.jpg',
        price: 26
      },
      {
        id: 10,
        title: 'Gem Outlines Man',
        year: 2022,
        medium: 'Gouache',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/v1552434629/chizetteArt%20-%20Compressed/gem_outlines_man.jpg',
        price: 26
      },
      {
        id: 11,
        title: 'Geode',
        year: 2019,
        medium: 'Gouache',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/v1552434634/chizetteArt%20-%20Compressed/geode.jpg',
        price: 27
      },
      {
        id: 12,
        title: 'Jimmie',
        year: 2019,
        medium: 'Photography',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/v1552434644/chizetteArt%20-%20Compressed/jimmie.jpg',
        price: 40
      },
      {
        id: 13,
        title: 'Lobster',
        year: 2019,
        medium: 'Photography',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/v1552434637/chizetteArt%20-%20Compressed/lobster.jpg',
        price: 40
      },
      {
        id: 14,
        title: 'Maui',
        year: 2019,
        medium: 'Photography',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/v1552434659/chizetteArt%20-%20Compressed/maui_plate.jpg',
        price: 40
      },
      {
        id: 15,
        title: 'Negril Horse',
        year: 2019,
        medium: 'Photography',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/v1552434681/chizetteArt%20-%20Compressed/negril_horse.jpg',
        price: 40
      },
      {
        id: 16,
        title: 'Newspaper',
        year: 2019,
        medium: 'Photography',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/v1552434655/chizetteArt%20-%20Compressed/newspaper.jpg',
        price: 40
      },
      {
        id: 17,
        title: 'North Shore',
        year: 2019,
        medium: 'Photography',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/v1552434665/chizetteArt%20-%20Compressed/north_shore.jpg',
        price: 40
      },
      {
        id: 18,
        title: 'Rainbow Man',
        year: 2019,
        medium: 'Gouache',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/v1552434640/chizetteArt%20-%20Compressed/rainbow_man.jpg',
        price: 27
      },
      {
        id: 19,
        title: 'Road to Hana',
        year: 2019,
        medium: 'Photography',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/v1552434645/chizetteArt%20-%20Compressed/road_to_hana.jpg',
        price: 40
      },
      {
        id: 20,
        title: 'Roots',
        year: 2019,
        medium: 'Photography',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/v1552434653/chizetteArt%20-%20Compressed/roots.jpg',
        price: 40
      },
      {
        id: 21,
        title: 'Self Portrait',
        year: 2019,
        medium: 'Gouache',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/v1552434663/chizetteArt%20-%20Compressed/self_portrait.jpg',
        price: 32
      },
      {
        id: 22,
        title: 'Shi',
        year: 2019,
        medium: 'Photography',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/v1552434680/chizetteArt%20-%20Compressed/shi.jpg',
        price: 40
      },
      {
        id: 23,
        title: 'Smoky Quartz',
        year: 2019,
        medium: 'Aquarelle Pencil',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/v1552434678/chizetteArt%20-%20Compressed/smoky_quartz.jpg',
        price: 32
      },
      {
        id: 24,
        title: 'Smoky Quartz Lady',
        year: 2019,
        medium: 'Gouache',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/a_0/v1552434665/chizetteArt%20-%20Compressed/smoky_quartz_lady.jpg',
        price: 32
      },
      {
        id: 25,
        title: 'Sunset Beach',
        year: 2019,
        medium: 'Photography',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/v1552434670/chizetteArt%20-%20Compressed/sunset_beach.jpg',
        price: 40
      },
      {
        id: 26,
        title: 'Waikiki',
        year: 2019,
        medium: 'Photography',
        poster: 'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_1000/v1552434679/chizetteArt%20-%20Compressed/waikiki.jpg',
        price: 40
      }
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('chizetteart_id_seq', (SELECT MAX(id) FROM chizetteart))")
      })
    })
}