const router = require("express").Router();
const PaymentController = require("../controllers/Payment.controller");
const productMiddleware = require("../middlewares/Product.middleware");

// router.post(
//   "/payment/new",
//   productMiddleware.validatePayment,
//   PaymentsController.newOrder
// );

// for handler paypal payment
router.post(
  "/orders",
  // productMiddleware.validatePayment,
  PaymentController.createOrder
);
router.post("/orders/:orderID/capture", PaymentController.captureOrder);

module.exports = router;
