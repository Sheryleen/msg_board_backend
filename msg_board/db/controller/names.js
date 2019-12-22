const knex = require("../knex");

exports.getAllNames = (req, res) => {
  knex //instance of knex
    .select() //select all
    .table("names") //from name
    .then(names => res.json(names)); //getting all users back
};

exports.getOneName = (req, res) => {
  knex("name")
    .where("id", req.params.id)
    .then(name => res.json(name));
};

exports.addOneName = (req, res) => {
  knex("name")
    .insert({
      ...req.body //all column data in row
    })

    .returning("*")
    .then(name => res.json([name]));
};

exports.updateOneName = (req, res) => {
  knex("name")
    .update({
      ...req.body //all column data in row
    })

    .where("id", req.params.id)
    .returning("*")
    .then(updatedName => res.json(updatedName));
};

exports.removeOneName = (req, res) => {
  knex("name")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newName => res.json(newName)); //returns removed name
};
