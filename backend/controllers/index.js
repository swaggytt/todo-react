const getTasksController = require("./getTasksController");
const addTaskController = require("./addTaskController");
const deleteTaskController = require("./deleteTaskController");
const getOneTaskController = require("./getOneTaskcontroller");
const editTaskController = require("./editTaskController");
const getTodoTasksController = require("./getTodoTasksController");
const getDoneTasksController = require("./getDoneTasksController");

module.exports = {
  getTasksController,
  addTaskController,
  deleteTaskController,
  getOneTaskController,
  editTaskController,
  getTodoTasksController,
  getDoneTasksController,
};
