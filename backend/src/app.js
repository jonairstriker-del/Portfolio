const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const logger = require("./middleware/loggerMiddleware");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const config = require("./config/env");

// Routes
const projectRoutes = require("./routes/projectRoutes");
const certificateRoutes = require("./routes/certificateRoutes");
const experienceRoutes = require("./routes/experienceRoutes");
const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

// Security
app.use(helmet());

// CORS
app.use(
  cors({
    origin: config.frontendUrl,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// Body parsing
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

// Logger
app.use(logger);

// Health check
app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Jonair Portfolio API is running",
    environment: config.nodeEnv,
    timestamp: new Date().toISOString(),
  });
});

// API routes
app.use("/api/projects", projectRoutes);
app.use("/api/certificates", certificateRoutes);
app.use("/api/experiences", experienceRoutes);
app.use("/api/resume", resumeRoutes);

// Error handlers
app.use(notFound);
app.use(errorHandler);

module.exports = app;
