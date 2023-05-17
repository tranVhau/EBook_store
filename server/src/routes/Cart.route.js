const router = require("express").Router();
const CartController = require("../controllers/Cart.controller");

router.get("/cart/:id", CartController.getCart);
router.post("/cart/add", CartController.addToCart);
router.put("/cart/remove", CartController.removeFromCart);
router.delete("/cart/drop/:id", CartController.dropCart);

module.exports = router;
