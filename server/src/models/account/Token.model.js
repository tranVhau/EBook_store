const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema(
  {
    accountID: { type: mongoose.Schema.Types.ObjectId, require: true },
    token: { type: String, require: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Tokens = mongoose.model("Token", TokenSchema);

module.exports = Tokens;
