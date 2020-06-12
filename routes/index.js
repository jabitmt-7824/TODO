const express = require("express");
const router = express.Router();


const todoController = require("../controllers/todoController");

// home page
router.get("/", todoController.home);

//add task
router.post("/add-task", todoController.addItem);

// delete task
router.post("/delete-task", todoController.delItem);

module.exports = router;