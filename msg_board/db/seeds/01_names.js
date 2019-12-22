exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("names").insert([
        { name: "Criminal" },
        { name: "Batman" }]);
    });
};