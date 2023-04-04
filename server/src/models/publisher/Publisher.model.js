const mongoose = require("mongoose");

const Publisher = new mongoose.Schema({
  name: { type: String, require: true },
});

const Publishers = mongoose.model("Publisher", Publisher);
module.exports = Publishers;
