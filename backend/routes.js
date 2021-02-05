const express = require("express");
const controllers = require("./controllers");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/tasks", (req, res) => controllers.getTasksController(req, res));

router.post("/task/add", (req, res) => controllers.addTaskController(req, res));

module.exports = router;
