const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    avt: { type: String, default: "https://avt" },
    phone: { type: Number },
    email: { type: String, require: true, unique: true },
    password: {
      type: String,
      require: true,
      unique: true,
      minlength: 6,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
