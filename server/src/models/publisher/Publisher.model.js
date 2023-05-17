const mongoose = require("mongoose");

const PublisherSchema = new mongoose.Schema({
  name: { type: String, require: true },
});

const Publishers = mongoose.model("Publisher", PublisherSchema);
module.exports = Publishers;
