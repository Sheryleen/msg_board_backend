const express = require("express");
const router = express.Router();
const knex = require("../db/knex");
const namesController = require("../db/controller/names");

//GET ALL NAMES, ADD, EDIT AND REMOVE
router.get("/names", namesController.getAllNames);
router.get("/names/:id", namesController.getOneName);
router.post("/names", namesController.addOneName);
router.patch("/names/:id", namesController.updateOneName);
router.delete("/names/:id", namesController.removeOneName);

module.exports = router;
