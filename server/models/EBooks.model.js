const mongoose = require("mongoose");
var slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const db = require("../utils/database");

const eBookSchema = new mongoose.Schema({
  name: { type: String, require: true },
  source: { type: String, require: true },
  desciption: { type: String },
  genres: { type: [String] },
  price: { type: Number },
});

const EBook = mongoose.model("EBook", eBookSchema);
module.export = EBook;
