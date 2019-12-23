exports.up = function(knex) {
  return knex.schema.createTable("names_messages", function(table) {
    table.increments();
    table
      .integer("name_id")
      .references("names.id")
      .onDelete("CASCADE"); //referencing id column of the users table
    table
      .integer("message_id")
      .references("messages.id")
      .onDelete("CASCADE"); //referencing id column of the appointments table
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("names_messages");
};
