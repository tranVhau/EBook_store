const mongoose = require("mongoose");

const GenresSchema = new mongoose.Schema({
  name: { type: String, require: true },
});

const Genres = mongoose.model("Genre", GenresSchema);
module.exports = Genres;
