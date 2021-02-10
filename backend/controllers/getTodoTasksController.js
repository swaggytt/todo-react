const { TaskModel } = require("../models");

module.exports = async function getTodoTasksController(req, res) {
  const tasks = await TaskModel.find({ isFinished: false });
  return res.send(tasks);
};
