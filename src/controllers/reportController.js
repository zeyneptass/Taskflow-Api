const taskRepository = require("../repositories/taskRepository");

// (GET /api/reports/completed)
const getCompletedReport = (req, res) => {
  try {
    const tasks = taskRepository.getAllTasks();
    const completedTasks = tasks.filter(
      (task) => task.completed === true || task.status === "completed",
    );

    return res.status(200).json({
      success: true,
      message: "Tamamlanan görevler raporu başarıyla getirildi.",
      completedCount: completedTasks.length,
      data: completedTasks,
    });
  } catch (error) {
    console.error(
      "[reportController] getCompletedReport hatası:",
      error.message,
    );
    return res.status(500).json({
      success: false,
      message: "Tamamlanan görevler raporu alınamadı.",
      error: error.message,
    });
  }
};

// (GET /api/reports/pending)
const getPendingReport = (req, res) => {
  try {
    const tasks = taskRepository.getAllTasks();
    const pendingTasks = tasks.filter(
      (task) => task.completed === false || task.status === "pending",
    );

    return res.status(200).json({
      success: true,
      message: "Bekleyen görevler raporu başarıyla getirildi.",
      pendingCount: pendingTasks.length,
      data: pendingTasks,
    });
  } catch (error) {
    console.error("[reportController] getPendingReport hatası:", error.message);
    return res.status(500).json({
      success: false,
      message: "Bekleyen görevler raporu alınamadı.",
      error: error.message,
    });
  }
};

//  (GET /api/reports/summary)
const getSummaryReport = (req, res) => {
  try {
    const tasks = taskRepository.getAllTasks();
    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
      (task) => task.completed === true || task.status === "completed",
    );
    const completedCount = completedTasks.length;
    const pendingCount = totalTasks - completedCount;

    const completionRate =
      totalTasks > 0
        ? `%${((completedCount / totalTasks) * 100).toFixed(2)}`
        : "%0";

    return res.status(200).json({
      success: true,
      message: "Genel sistem özeti başarıyla oluşturuldu.",
      summary: {
        totalTasks,
        completedTasks: completedCount,
        pendingTasks: pendingCount,
        completionRate,
      },
    });
  } catch (error) {
    console.error("[reportController] getSummaryReport hatası:", error.message);
    return res.status(500).json({
      success: false,
      message: "Sistem özeti raporu oluşturulamadı.",
      error: error.message,
    });
  }
};

module.exports = {
  getCompletedReport,
  getPendingReport,
  getSummaryReport,
};
