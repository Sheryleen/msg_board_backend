const knex = require("../knex");

exports.getAllUsers = (req, res) => {
  knex //instance of knex
    .select() //select all
    .table("users") //from users
    .then(users => res.json(users)); //getting all users back
};

exports.getOneUser = (req, res) => {
  knex
    .select() //retrieval process
    .table("users")
    .where("id", req.params.id)
    .then(user => res.json(user));
};
exports.addOneUser = (req, res) => {
  knex("users")
    .insert(req.body)
    .returning("*")
    .then(newUser => res.json(newUser));
};

exports.updateOneUser = (req, res) => {
  knex("users")
    .update({
      ...req.body
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedUser => res.json(updatedUser));
};

exports.removeOneUser = (req, res) => {
  knex("users")
    .del()
    .where("id, req.params.id")
    .returning("*")
    .then(newUser => res.json(newUser));
};
