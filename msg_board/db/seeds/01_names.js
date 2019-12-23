
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('names').del()
    .then(function () {
      // Inserts seed entries
      return knex('names').insert([
        {id: 1, name: 'Criminal'},
        {id: 2, name: 'Batman'},
      ]);
    });
};
