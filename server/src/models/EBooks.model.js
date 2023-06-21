const mongoose = require("mongoose");

const EBookSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    description: { type: String },
    source: { type: String, require: true },
    price: {
      type: mongoose.Types.Decimal128,
    },
    discount: { type: Number },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
EBookSchema.index({ name: "text" });
const EBooks = mongoose.model("EBook", EBookSchema);

module.exports = EBooks;
