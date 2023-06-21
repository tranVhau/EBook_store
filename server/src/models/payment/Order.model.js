const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    order_no: { type: String },
    user_id: { type: mongoose.Schema.Types.ObjectId },
    email: { type: String },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "OrderItem" }],
    total: { type: mongoose.Types.Decimal128 },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Orders = mongoose.model("Order", OrderSchema);
module.exports = Orders;
