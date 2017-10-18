
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('company').del()
    .then(function () {
      // Inserts seed entries
      return knex('company').insert([
        {name: "Nike", description: "Sporty", suite:1},
        {name: "Adidas", description: "Comfortable", suite:2},
        {name: "Converse", description: "Classic", suite:3}
      ]);
    });
};
