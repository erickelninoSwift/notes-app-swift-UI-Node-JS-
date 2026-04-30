const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    note: {
      type: String,
      required: [true, "note is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model("Note", noteSchema);
