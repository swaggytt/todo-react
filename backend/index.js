const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 9000;

// mongodb+srv://dbUser:<password>@cluster0.1ecpb.mongodb.net/<dbname>?retryWrites=true&w=majority
// mongodb://localhost:27017/todo-react
mongoose
  .connect("mongodb+srv://dbUser:1234@cluster0.1ecpb.mongodb.net/todo-react?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected database...");
  });

// mongoose.connect("mongodb+srv://dbUser:1234@cluster0.1ecpb.mongodb.net/todo-react?retryWrites=true&w=majority").then(() => {
//   console.log("Connected database server...");
// });

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hola");
});

app.listen(PORT, () => {
  console.log("Start server at port 9000");
});
