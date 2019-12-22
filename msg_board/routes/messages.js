const express = require("express");
const router = express.Router();
const knex = require("../db/knex");
const productsController = require("../db/controllers/messages");

//GET ALL PRODUCTS, ADD, EDIT AND REMOVE
router.get("/messages", messagesController.getAllMessages);
router.get("/messages/:id", messagesController.getOneMessage);
router.post("/messages", messagesController.addOneMessage);
router.patch("/messages/:id", messagesController.updateOneMessage);
router.delete("/messages/:id", messagesController.removeOneMessage);

module.exports = router;
