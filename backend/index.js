const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://mongo:27017/mydb")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error(err));

app.get("/", (req, res) => {
  res.send("Hello from Express + Mongo!");
});

app.listen(5000, () => console.log("Backend running on port 5000"));
