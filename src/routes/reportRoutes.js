const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");

// GET /api/reports/completed
router.get("/completed", reportController.getCompletedReport);

// GET /api/reports/pending
router.get("/pending", reportController.getPendingReport);

// GET /api/reports/summary
router.get("/summary", reportController.getSummaryReport);

module.exports = router;
