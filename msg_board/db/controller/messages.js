const knex = require("../knex");

exports.getAllMessages = (req, res) => {
  knex //instance of knex
    .select() //select all
    .table("messages") //from name
    .then(messages => res.json(messages)); //getting all users back
};

exports.getOneMessage = (req, res) => {
  knex("message")
    .where("id", req.params.id)
    .then(message => res.json(message));
};

exports.addOneMessage = (req, res) => {
  knex("message")
    .insert({
      ...req.body //all column data in row
    })

    .returning("*")
    .then(message => res.json([message]));
};

exports.updateOneMessage = (req, res) => {
  knex("message")
    .update({
      ...req.body //all column data in row
    })

    .where("id", req.params.id)
    .returning("*")
    .then(updatedMessage => res.json(updatedMessage));
};

exports.removeOneMessage = (req, res) => {
  knex("message")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newMessage => res.json(newMessage)); //returns removed name
};
