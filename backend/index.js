const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

mongoose.connect("mongodb://localhost:27017/todo-react").then(() => {
  console.log("Connected database at mongodb://localhost:27017/todo-react");
});

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hola");
});

app.listen(9000, () => {
  console.log("Start server at port 9000");
});
