const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const Note = require("../models/Note");

//create a note
router.post("/", auth, async (req, res) => {
  const note = await Note.create({ ...req.body, user: req.userId });
  res.json(note);
});

//get notes
router.get("/", auth, async (req, res) => {
  const notes = await Note.find({ user: req.userId });
  res.json(notes);
});

//update note
router.put("/:id", auth, async (req, res) => {
  const id = req.params.id;
  const note = await Note.findByIdAndUpdate(id, req.body, { new: true });
  res.json(note);
});

//delete note
router.delete("/:id", auth, async (req, res) => {
  const id = req.params.id;
  await Note.findByIdAndDelete(id);
  res.json({ message: "Deleted" });
});

module.exports = router;
