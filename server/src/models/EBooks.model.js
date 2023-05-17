const mongoose = require("mongoose");

const EBookSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    description: { type: String },
    source: { type: String, require: true },
    price: { type: Number },
    genres: [{ type: mongoose.Schema.Types.ObjectId, ref: "Genre" }],
    Author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const EBooks = mongoose.model("EBook", EBookSchema);

module.exports = EBooks;
