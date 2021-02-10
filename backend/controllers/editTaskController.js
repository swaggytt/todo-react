const { TaskModel } = require("../models");

module.exports = async function getOneTaskController(req, res) {
  const task = await TaskModel.findOneAndUpdate({ _id: req.params.id }, { ...req.body });
  return res.send("Updated");
};
