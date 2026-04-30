const express = require("express");
const morgan = require("morgan");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (req, res) =>
  res.json({ success: true, message: "API is running 🚀" }),
);

app.use("/api/notes", noteRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
