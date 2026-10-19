const express = require("express");
const logger = require("./middlewares/logger");
const { readData } = require("./repositories/taskRepository");
const taskRoutes = require("./routes/taskRoutes");
const app = express();
const reportRoutes = require('./routes/reportRoutes');

app.use(express.json());
app.use(logger);

// Task routes
app.use("/api/tasks", taskRoutes); // Tüm görevlerle ilgili işlemler için taskRoutes kullanılır

app.get("/", (req, res) => {
  res.send("Taskflow API çalışıyor");
});

app.use("/api/reports", reportRoutes);


module.exports = app;
