const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "EBook" }],
});

const Carts = mongoose.model("cart", CartSchema);
module.exports = Carts;
