const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    transaction_id: { type: String },
    user_id: { type: mongoose.Schema.Types.ObjectId },
    email: { type: String },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "OrderItem" }],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Orders = mongoose.model("Order", OrderSchema);
module.exports = Orders;
