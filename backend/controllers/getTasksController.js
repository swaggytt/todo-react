const { TaskModel } = require("../models");

module.exports = async function getTasksController(req, res) {
  const tasks = await TaskModel.find();
  return res.send(tasks);
};
