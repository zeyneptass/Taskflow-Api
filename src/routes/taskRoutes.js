const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Tüm görevleri al ve yeni görev oluştur
router.route('/')
    .get(taskController.getAllTasks)
    .post(taskController.createTask);

// Belirli bir görevi al, güncelle veya sil
router.route('/:id')
    .get(taskController.getTaskById)
    .put(taskController.updateTask)
    .delete(taskController.deleteTask);

module.exports = router;