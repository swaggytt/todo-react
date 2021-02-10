const { TaskModel } = require("../models");

module.exports = async function getOneTaskController(req, res) {
  const tasks = await TaskModel.findOne({ _id: req.params.id });
  return res.send(tasks);
};
