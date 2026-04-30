// src/controllers/noteController.js
const Note = require("../models/Note");

// GET /api/notes
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort("-createdAt");
    res.status(200).json({ success: true, count: notes.length, data: notes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET /api/notes/:id
exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note)
      return res
        .status(404)
        .json({ success: false, message: "Note not found" });
    res.status(200).json({ success: true, data: note });
  } catch (err) {
    res.status(400).json({ success: false, message: "Invalid ID" });
  }
};

// POST /api/notes
exports.createNote = async (req, res) => {
  try {
    const { note } = req.body;
    if (!note)
      return res
        .status(400)
        .json({ success: false, message: "note is required" });
    const created = await Note.create({ note });
    res.status(201).json({ success: true, data: created });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// PUT /api/notes/:id
exports.updateNote = async (req, res) => {
  try {
    const { note } = req.body;
    if (!note)
      return res
        .status(400)
        .json({ success: false, message: "note is required" });
    const updated = await Note.findByIdAndUpdate(
      req.params.id,
      { note },
      { new: true, runValidators: true },
    );
    if (!updated)
      return res
        .status(404)
        .json({ success: false, message: "Note not found" });
    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    res.status(400).json({ success: false, message: "Invalid ID" });
  }
};

// DELETE /api/notes/:id
exports.deleteNote = async (req, res) => {
  try {
    const deleted = await Note.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res
        .status(404)
        .json({ success: false, message: "Note not found" });
    res.status(200).json({ success: true, message: "Note deleted" });
  } catch (err) {
    res.status(400).json({ success: false, message: "Invalid ID" });
  }
};
