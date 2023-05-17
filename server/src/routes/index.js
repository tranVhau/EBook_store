const EBookRouter = require("./EBook.route");
const AuthRouter = require("./Auth.route");
const CartRouter = require("./Cart.route");

module.exports = (app) => {
  app.use("/api/client", EBookRouter);
  app.use("/api/client", AuthRouter);
  app.use("/api/client", CartRouter);
};
