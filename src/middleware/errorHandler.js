const notFound = (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
};

const errorHandler = (err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ success: false, message: err.message || "Server error" });
};

module.exports = { notFound, errorHandler };
