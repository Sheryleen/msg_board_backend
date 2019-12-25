const express = require("express");
const router = express.Router(); //instance of a router
const knex = require("../db/knex"); //importing instance of knex
const usersController = require("../db/controller/users");

//GET ALL USERS, ONE USER, ADDING USER AND REMOVE USER
router.get("/users", usersController.getAllUsers);
router.get("/users/:id", usersController.getOneUser); //req.params.id this is :id
router.post("/users", usersController.addOneUser);
router.patch("/users/:id", usersController.updateOneUser);
router.delete("/users/:id", usersController.removeOneUser);

module.exports = router;
