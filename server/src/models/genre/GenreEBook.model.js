const mongoose = require("mongoose");

const GenreEBookSchema = new mongoose.Schema({
  genre: { type: mongoose.Schema.Types.ObjectId, ref: "Genre" },
  ebook: { type: mongoose.Schema.Types.ObjectId, ref: "EBook" },
});

const GenresEBooks = mongoose.model("GenresEBook", GenreEBookSchema);
module.exports = GenresEBooks;
