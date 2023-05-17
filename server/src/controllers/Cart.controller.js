const mongoose = require("mongoose");
const { Carts } = require("../models");

// Get all cart item from specific user ID":
const getCart = async (req, res) => {
  try {
    const user_id = req.params.id;
    const cart = await Carts.findOne({ userID: user_id });

    // const cart = await Carts.findOne({ userID: user_id }).populate("ebooks");
    res.status(200).json({ cart: cart.items });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Normally use to put single item to cart but it can put mutiple(merge)
// in "merge cart" case, input is an array ID of item:
const addToCart = async (req, res) => {
  const user_id = new mongoose.Types.ObjectId(req.body.user_id);
  try {
    const existCart = await Carts.findOne({ userID: user_id });
    // create a cart with empty

    if (!existCart) {
      const cart = new Carts({ userID: user_id, items: new Array() });
      await cart.save();
    }
    //add [items] to cart
    const items_arr = req.body.items;

    // filter if given ids has existed
    // refind the existed cart have created above
    const existCart_2 = await Carts.findOne({ userID: user_id });

    items_arr.forEach((item) => {
      if (!existCart_2.items.includes(new mongoose.Types.ObjectId(item))) {
        existCart_2.items.push(new mongoose.Types.ObjectId(item));
      }
    });

    await existCart_2.save();

    const cart = await Carts.findOne({ userID: user_id });
    res.status(200).json(cart);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

// Just update the cart
const removeFromCart = async (req, res) => {
  try {
    const user_cart = req.body.user_id;
    const item = req.body.item;
    const cart = await Carts.findOne({ userID: user_cart });
    const update_cart = cart.items.filter((cart_item) => cart_item != item);
    cart.items = update_cart;
    cart.save();

    res.status(201).json(cart);
  } catch (error) {}
};

//remove all item but still keep the cart
const dropCart = async (req, res) => {
  try {
    const user_id = req.params.id;
    const cart = await Carts.findOne({ userID: user_id });
    cart.items = [];
    await cart.save();
    res.status(201).json({ cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
  dropCart,
};
