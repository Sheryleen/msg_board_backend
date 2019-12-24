exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("message")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("message").insert([
        {
          msg: "What Are You?",
          user_id: 1
        },
        {
          msg: "I\m Batman",
          user_id: 2
        },
      ]);
    });
};
