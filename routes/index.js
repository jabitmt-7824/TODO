const express = require("express");
const router = express.Router();


const todoController = require("../controllers/todoController");

router.get("/", todoController.home);

router.post("/add-task", todoController.addItem);

module.exports = router;