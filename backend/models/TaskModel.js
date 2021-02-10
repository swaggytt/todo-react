const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  taskName: String,
  isFinished: { type: Boolean, default: false },
  taskDate: Date,
});

const TaskModel = mongoose.model("Task", TaskSchema);

module.exports = TaskModel;
