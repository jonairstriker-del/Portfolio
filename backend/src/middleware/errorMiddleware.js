// 404 handler
function notFound(req, res, next) {
  const error = new Error(`Route not found — ${req.originalUrl}`);
  error.status = 404;
  next(error);
}

// Global error handler
function errorHandler(err, req, res, _next) {
  const statusCode = err.status || err.statusCode || 500;
  const isDev = process.env.NODE_ENV !== "production";

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    ...(isDev && { stack: err.stack }),
  });
}

module.exports = { notFound, errorHandler };
