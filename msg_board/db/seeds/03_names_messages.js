exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("names_messages")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("names_messages").insert([
        { id: 1, message_id: 1 },
        { id: 2, message_id: 2 }
      ]);
    });
};
