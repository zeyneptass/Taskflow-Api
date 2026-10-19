const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const { validateTaskData } = require("../middlewares/validation");

router.get("/search", taskController.searchTasks);

// Tüm görevleri al ve yeni görev oluştur
router
  .route("/")
  .get(taskController.getAllTasks)
  .post(validateTaskData, taskController.createTask);

// Belirli bir görevi al, güncelle veya sil ve validateTaskData middleware'ini kullan
router
  .route("/:id")
  .get(taskController.getTaskById)
  .put(validateTaskData, taskController.updateTask)
  .delete(taskController.deleteTask);

module.exports = router;