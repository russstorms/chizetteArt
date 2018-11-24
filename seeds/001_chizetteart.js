exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chizetteart').del()
    .then(function() {
      // Inserts seed entries
      return knex('chizetteart').insert([
        {id: 1, Title: 'Human Drawing', Year: 2018, Medium: 'Gouache', Description: 'Drawing of a human'},
        {id: 2, Title: 'Gem Painting', Year: 2018, Medium: 'Acrylic Paint', Description: 'A gem I found!'},
        {id: 3, Title: 'Animal Painting', Year: 2018, Medium: 'Oil Paint', Description: 'Wanted to cuddle with animals today :)'},
        {id: 4, Title: 'Rough Sketch', Year: 2018, Medium: 'Charcoal', Description: 'No colors today, just sketches!' },
        {id: 5, Title: 'Animal Drawing', Year: 2018, Medium: 'Graphite', Description: 'I love animals the most.'},
        {id: 6, Title: 'Face', Year: 2018, Medium: 'Water Color', Description: 'Faces and hands are so tough!'},
        {id: 7, Title: 'Gem and Body', Year: 2018, Medium: 'Gouache', Description: 'Love drawing these two together...'}
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('chizetteart_id_seq', (SELECT MAX(id) FROM chizetteart))")
      })
    })
}