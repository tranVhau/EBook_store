const router = require("express").Router();
const AuthController = require("../controllers/Auth.controller");
const middleware = require("../middlewares/Auth.middleware");

router.post("/register", middleware.policy, AuthController.register);
router.post("/login", middleware.policy, AuthController.login);
router.post("/refresh", AuthController.refresh);
router.post("/logout", AuthController.logout);
router.get("/me", middleware.verifyToken, AuthController.me);

module.exports = router;
