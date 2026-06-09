const express = require("express");
const router = express.Router();
const { getCertificates } = require("../controllers/certificateController");

// GET /api/certificates
router.get("/", getCertificates);

module.exports = router;
