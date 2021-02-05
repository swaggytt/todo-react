const { TaskModel } = require("../models");

module.exports = async function addTaskController(req, res) {
  const task = new TaskModel(req.body);
  await task.save();
  return res.sendStatus(201);
};
