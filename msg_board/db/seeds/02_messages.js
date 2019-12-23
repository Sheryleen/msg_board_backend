exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("messages")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("messages").insert([
        { id: 1, message: "What Are You?" },
        { id: 2, message: "I\'m Batman" }
      ]);
    });
};
