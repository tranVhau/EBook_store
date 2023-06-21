const { mongoose } = require("mongoose");
const { Orders, OrdersItems } = require("../models");
const emailSender = require("../utils/emailSender");

// transaction.
const newOrder = async (req, res) => {
  const { order_no, items, total, email, user_id } = req.body;
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const orderIDofItem = items.map((item) => item._id);
    const order = new Orders({
      order_no: order_no,
      user_id: user_id,
      email: email,
      total: total,
      items: orderIDofItem,
    });
    const results = await order.save();
    const orderItemInfo = items.map((obj) => {
      return {
        item: obj._id,
        order_id: results._id,
        price: obj.price,
        discount: obj.discount,
      };
    });
    orderItemInfo.forEach(async (item) => {
      const order_item = new OrdersItems({
        ...item,
      });
      await order_item.save();
    });
    session.commitTransaction();
    res.status(201).json({ message: "successfully" });
  } catch (error) {
    session.abortTransaction();
    res.status(500).json({ message: "failed" });
  } finally {
    session.endSession();
  }
  const response = await emailSender(email, "abc");
  res.json(response);
};

module.exports = { newOrder };
