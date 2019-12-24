
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {

      // Inserts seed entries
      return knex("users").insert([

        {
          "name": "Criminal",
          "message": "What Are You?",
        },

        {
          "name": "Batman",
          "message": "I\m Batman"
        }
      ]);
    });
};

