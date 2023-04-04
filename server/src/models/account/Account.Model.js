const mongoose = require("mongoose");

const Account = new mongoose.Schema(
  {
    name: { type: String },
    avt: { type: String },
    phone: { type: Number },
    passoword: { type: String, require: true },
    email: { type: String },
    social_id: { type: String },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Accounts = mongoose.model("Account", Account);
module.exports = Accounts;
