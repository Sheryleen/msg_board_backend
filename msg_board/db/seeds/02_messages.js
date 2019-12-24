exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("message")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("message").insert([
        {
          message: "What Are You?",
          user_id: 1
        },
        {
          message: "I\m Batman",
          user_id: 2
        },
      ]);
    });
};
