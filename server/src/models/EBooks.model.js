const mongoose = require("mongoose");

// const db = require("../utils/database");

const eBookSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    desciption: { type: String },
    source: { type: String, require: true },
    price: { type: Number },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const EBooks = mongoose.model("EBook", eBookSchema);

module.exports = EBooks;
