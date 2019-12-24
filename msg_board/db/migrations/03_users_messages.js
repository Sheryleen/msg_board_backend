exports.up = function (knex) {
  return knex.schema.createTable("users_messages", function (table) {
    table.increments();
    table
      .integer("user_id")
      .references("users.id")
      .onDelete("CASCADE"); //referencing id column of the users table
    table
      .integer("message_id")
      .references("messages.id")
      .onDelete("CASCADE"); //referencing id column of the appointments table
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users_messages");
};
