const { TaskModel } = require("../models");

module.exports = async function getTodoTasksController(req, res) {
  const tasks = await TaskModel.find({ isFinished: true });
  return res.send(tasks);
};
