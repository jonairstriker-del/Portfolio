const express = require("express");
const router = express.Router();
const { getExperiences } = require("../controllers/experienceController");

// GET /api/experiences
router.get("/", getExperiences);

module.exports = router;
