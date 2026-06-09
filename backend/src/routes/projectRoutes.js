const express = require("express");
const router = express.Router();
const { getProjects, getProject } = require("../controllers/projectController");

// GET /api/projects
router.get("/", getProjects);

// GET /api/projects/:id
router.get("/:id", getProject);

module.exports = router;
