const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  taskName: String,
  isFinished: Boolean,
  date: String,
});

const TaskModel = mongoose.model("Task", TaskSchema);

module.exports = TaskModel;
