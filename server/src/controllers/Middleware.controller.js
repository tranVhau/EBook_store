const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const verifyToken = async (req, res, next) => {
  const token = req.headers.token.split(" ")[1]; // get token after 'Bearer'
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decode) => {
      if (err) {
        return res.status(403).json({ message: "token is invalid" });
      }
      req.user = decode;
      next();
    });
  } else {
    res.status(401).json({ message: "unauthenticated" });
  }
};

module.exports = { verifyToken };
