const router = require("express").Router();
const AuthController = require("../controllers/Auth.controller");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/refresh", AuthController.refresh);

module.exports = router;
