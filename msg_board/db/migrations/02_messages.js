exports.up = function(knex, Promise) {
  return knex.schema.createTable("category", table => {
    table.increments();
    table.string("names").notNullable();
    table.string("messages").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("category");
};
