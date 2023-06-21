const router = require("express").Router();
const PaymentsController = require("../controllers/Payment.controller");
const productMiddleware = require("../middlewares/Product.middleware");

router.post(
  "/payment/new",
  productMiddleware.validatePayment,
  PaymentsController.newOrder
);

module.exports = router;
