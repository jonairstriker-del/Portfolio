const express = require("express");
const router = express.Router();
const { downloadResume } = require("../controllers/resumeController");

// GET /api/resume/download
router.get("/download", downloadResume);

module.exports = router;
