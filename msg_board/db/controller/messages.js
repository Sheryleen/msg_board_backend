exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("messages")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("messages").insert([
        {
          
          name: "Criminal",
          message: "What Are You?",
          created_at: " ",
          updated_at: " ",
          
          },
          {
          
          name: "Batman",
          message: "I\"m Batman",
          created_at: " ",
          updated_at: " ",
          
        },


