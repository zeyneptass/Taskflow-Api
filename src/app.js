const express = require("express");
const logger = require("./middlewares/logger");
const { readData } = require("./repositories/taskRepository");
const app = express();

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.send("Taskflow API çalışıyor");
});

app.get("/tasks", (req, res) => {
  const tasks = readData();
  res.json(tasks);
});

module.exports = app;
