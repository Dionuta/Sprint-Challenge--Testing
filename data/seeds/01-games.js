
exports.seed = async function(knex) {
  
  // Inserts seed entries
  await knex('games').insert([
    {id: 1, title: 'Pacman', gener: 'Arcade',  releaseYear: 1980},
    {id: 2, title: 'Street Fighter', gener: 'Arcade',  releaseYear: 1987},
    {id: 3, title: 'Mortal Kombat', gener: 'Arcade',  releaseYear: 1992},
  ]);
};
