const express = require("express");
const controllers = require("./controllers");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/tasks", (req, res) => controllers.getTasksController(req, res));

router.get("/tasks/todo", (req, res) =>
  controllers.getTodoTasksController(req, res)
);

router.get("/tasks/done", (req, res) =>
  controllers.getDoneTasksController(req, res)
);

router.post("/tasks", (req, res) => controllers.addTaskController(req, res));

router.get("/tasks/:id", (req, res) =>
  controllers.getOneTaskController(req, res)
);

router.patch("/tasks/:id", (req, res) =>
  controllers.editTaskController(req, res)
);

router.delete("/tasks/:id", (req, res) =>
  controllers.deleteTaskController(req, res)
);

module.exports = router;
