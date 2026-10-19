const taskRepository = require("../repositories/taskRepository");

const getAllTasks = (req, res) => {
  try {
    const { status } = req.query;
    const tasks = taskRepository.getAllTasks();
    if (status !== undefined) {
      const isCompletedBool = status === "true";

      const filteredTasks = tasks.filter((task) => {
        // Durum alanı boolean veya string olabilir, buna göre filtreleme yapılır
        if (typeof task.completed === "boolean") {
          return task.completed === isCompletedBool;
        }
        if (typeof task.status === "string") {
          const taskIsCompleted = task.status === "completed";
          return taskIsCompleted === isCompletedBool;
        }
        return false;
      });

      return res.status(200).json({
        success: true,
        count: filteredTasks.length,
        data: filteredTasks,
      });
    }

    return res.status(200).json({
      success: true,
      count: tasks.length,
      data: tasks,
    });
  } catch (error) {
    console.error("[taskController] getAllTasks hatası:", error.message);
    return res.status(500).json({
      success: false,
      message: "Görevler alınamadı",
      error: error.message,
    });
  }
};

const searchTasks = (req, res) => {
  try {
    const { keyword } = req.query;

    if (!keyword) {
      return res.status(400).json({
        success: false,
        message: 'Arama yapmak için "keyword" parametresi gereklidir.',
      });
    }

    const tasks = taskRepository.getAllTasks();
    const lowerKeyword = keyword.toLowerCase();

    const results = tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(lowerKeyword) ||
        (task.description &&
          task.description.toLowerCase().includes(lowerKeyword)),
    );

    return res.status(200).json({
      success: true,
      count: results.length,
      data: results,
    });
  } catch (error) {
    console.error("[taskController] searchTasks hatası:", error.message);
    return res.status(500).json({
      success: false,
      message: "Arama işlemi sırasında bir hata oluştu.",
      error: error.message,
    });
  }
};

const getTaskById = (req, res) => {
  try {
    const taskId = req.params.id;
    const task = taskRepository.getTaskById(taskId);
    if (!task) {
      return res.status(404).json({
        success: false,
        message: `ID'si ${taskId} olan görev bulunamadı.`,
      });
    }
    return res.status(200).json({
      success: true,
      data: task,
    });
  } catch (error) {
    console.error("[taskController] getTaskById hatası:", error.message);
    return res.status(500).json({
      success: false,
      message: "Görev detayları alınamadı",
      error: error.message,
    });
  }
};

const createTask = (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Görev başlığı zorunludur.",
      });
    }
    const newTask = taskRepository.createTask({ title, description });
    return res.status(201).json({
      success: true,
      message: "Görev başarıyla oluşturuldu.",
      data: newTask,
    });
  } catch (error) {
    console.error("[taskController] createTask hatası:", error.message);
    return res.status(500).json({
      success: false,
      message: "Görev oluşturulurken bir hata oluştu.",
      error: error.message,
    });
  }
};

const updateTask = (req, res) => {
  try {
    const taskId = req.params.id;
    const { title, description, completed } = req.body;
    const updatedTask = taskRepository.updateTask(taskId, {
      title,
      description,
      completed,
    });
    if (!updatedTask) {
      return res.status(404).json({
        success: false,
        message: `ID'si ${taskId} olan görev bulunamadı.`,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Görev başarıyla güncellendi.",
      data: updatedTask,
    });
  } catch (error) {
    console.error("[taskController] updateTask hatası:", error.message);
    return res.status(500).json({
      success: false,
      message: "Görev güncellenirken bir hata oluştu.",
      error: error.message,
    });
  }
};

const deleteTask = (req, res) => {
  try {
    const taskId = req.params.id;
    const isDeleted = taskRepository.deleteTask(taskId);
    if (!isDeleted) {
      return res.status(404).json({
        success: false,
        message: `ID'si ${taskId} olan görev bulunamadı.`,
      });
    }
    return res.status(200).json({
      success: true,
      message: `ID'si ${taskId} olan görev başarıyla silindi.`,
    });
  } catch (error) {
    console.error("[taskController] deleteTask hatası:", error.message);
    return res.status(500).json({
      success: false,
      message: "Görev silinirken bir hata oluştu.",
      error: error.message,
    });
  }
};

module.exports = {
  getAllTasks,
  searchTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
