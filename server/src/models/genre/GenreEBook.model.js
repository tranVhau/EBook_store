const mongoose = require("mongoose");

const GenreEBook = new mongoose.Schema({
  genres: { type: mongoose.Schema.Types.ObjectId, ref: "Genres" },
  EBook: { type: mongoose.Schema.Types.ObjectId, ref: "EBooks" },
});

const GenresEBooks = mongoose.model("GenresEBook", GenreEBook);
module.exports = GenresEBooks;
