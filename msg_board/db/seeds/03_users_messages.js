exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users_messages")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users_messages").insert([
        { user_id: 1, message_id: 1 },
        { user_id: 2, message_id: 2 }
      ]);
    });
};
