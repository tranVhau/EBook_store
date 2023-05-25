const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: { type: String, require: true },
  ebooks: { type: mongoose.Schema.Types.ObjectId, ref: "Ebook" },
});

const Authors = mongoose.model("Author", AuthorSchema);
module.exports = Authors;
