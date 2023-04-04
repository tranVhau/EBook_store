const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

const AuthorSchema = new mongoose.Schema({
  name: { type: String, require: true },
});

const Authors = mongoose.model("Authors", AuthorSchema);
module.exports(Authors);
