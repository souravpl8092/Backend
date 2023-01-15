const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  titile: String,
  note: String,
  category: String,
  userID: String,
});

const NoteModel = mongoose.model("note", noteSchema);

module.exports = { NoteModel };
