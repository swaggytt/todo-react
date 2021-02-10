const { TaskModel } = require("../models");

module.exports = async function deleteTaskController(req, res) {
  await TaskModel.deleteOne({ _id: req.params.id });
  return res.send("Deleted");
};
