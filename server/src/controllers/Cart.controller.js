const mongoose = require("mongoose");
const { Carts } = require("../models");

//customize image link
function getImgSource(pdfSource) {
  const configStr = "w_400,h_600,c_fill,b_auto,pg_1,c_pad";
  const start = pdfSource.indexOf("upload/") + 7;
  // add config
  const configedIMG = pdfSource
    .slice(0, start)
    .concat(configStr, "/", pdfSource.slice(start, -4), ".png");
  return configedIMG;
}
// for update cart status (reused in all controllers)
const updateCartStatus = async (user_id, res) => {
  await Carts.findOne({ userID: user_id })
    .populate({
      path: "items",
      model: "EBook",
      select: "name author price author source discount",
      populate: { path: "author", model: "Author", select: "name" },
    })
    .lean()
    .then((cart) => {
      let amount = 0;
      let discountValue = 0;
      cart.items.forEach((item) => {
        item.author = item.author.name;
        item.price = +item.price;
        item.image = getImgSource(item.source);
        amount += item.price;
        discountValue += (item.price * item.discount) / 100;
      });

      cart.subtotal = amount.toFixed(2);
      cart.totalDiscount = discountValue.toFixed(2);
      res.status(200).json(cart);
    })
    .catch((err) => res.status(500).json(err));
};

// Get all cart item from specific user ID":
const getCart = async (req, res) => {
  try {
    const user_id = req.params.id;

    //create new cart with empty item
    const existCart = await Carts.findOne({ userID: user_id });
    if (!existCart) {
      const cart = new Carts({ userID: user_id, items: new Array() });
      await cart.save();
    }

    updateCartStatus(user_id, res);
    // res.status(200).json({ cart: cart });
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
    // create a cart with no item
    if (!existCart) {
      const cart = new Carts({ userID: user_id, items: new Array() });
      await cart.save();
    }
    //add [items] to cart
    const items_arr = req.body.items;

    // filter if given ids has existed
    // refind the existed cart have created above
    const existCart_2 = await Carts.findOne({ userID: user_id });

    items_arr.map((item) => {
      if (!existCart_2.items.includes(new mongoose.Types.ObjectId(item))) {
        existCart_2.items.push(new mongoose.Types.ObjectId(item));
      }
    });

    await existCart_2.save();

    updateCartStatus(user_id, res);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

// Just update the cart
const removeFromCart = async (req, res) => {
  try {
    const user_id = req.body.user_id;
    const item = req.body.item;
    const cart = await Carts.findOne({ userID: user_id });
    const update_cart = cart.items.filter((cart_item) => cart_item != item);
    cart.items = update_cart;
    await cart.save();

    updateCartStatus(user_id, res);
    // res.status(201).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
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
