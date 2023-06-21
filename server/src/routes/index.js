const EBookRouter = require("./EBook.route");
const AuthRouter = require("./Auth.route");
const CartRouter = require("./Cart.route");
const PaymentRouter = require("./_Payment.route");

module.exports = (app) => {
  app.use("/api/client", [EBookRouter, AuthRouter, CartRouter, PaymentRouter]);
};
