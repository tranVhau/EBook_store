const mongoose = require("mongoose");

const OrderItem = mongoose.Schema({
  order_id: { type: mongoose.Schema.Types.ObjectId },
  item: { type: mongoose.Schema.Types.ObjectId, ref: "EBook" },
  price: { type: mongoose.Types.Decimal128 },
  discount: { type: Number },
});

const OrdersItems = mongoose.model("OrderItem", OrderItem);
module.exports = OrdersItems;
