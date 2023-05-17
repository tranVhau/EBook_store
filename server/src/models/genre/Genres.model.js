const mongoose = require("mongoose");

const GenresSchema = new mongoose.Schema({
  name: { type: String, require: true },
  ebooks: [{ type: mongoose.Schema.Types.ObjectId, ref: "EBook" }],
});

const Genres = mongoose.model("Genre", GenresSchema);
module.exports = Genres;
