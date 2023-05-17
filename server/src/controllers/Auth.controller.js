const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { Users, Tokens } = require("../models");
const cookie = require("cookie-parser");

// genarate accesstoken
const genarateAccessToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE_TIME,
  });
};

//genarate refreshtoken

const genarateRefreshToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_REFRESH_KEY, {
    expiresIn: "30d",
  });
};

const storeRefreshRoken = async (newRefreshToken, userID, res) => {
  // find and delete current exist token
  await Tokens.findOneAndDelete({ accountID: userID });

  // store hashed refreshtoken
  bcrypt.hash(newRefreshToken, 10).then(async (hash) => {
    const token = new Tokens({
      accountID: userID,
      token: hash,
    });
    await token.save();
  });

  // store in cookie
  res.cookie("refreshToken", newRefreshToken, {
    httpOnly: true,
  });
};

const register = async (req, res) => {
  try {
    const saltRound = 10;
    bcrypt.hash(req.body.password, saltRound).then((hash) => {
      const newUser = new Users({
        name: req.body.name,
        email: req.body.email,
        password: hash,
        phone: req.body.phone,
      });
      newUser.save();
      res.status(200).json({ newUser });
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).json({ message: "email not found" });
    }
    bcrypt.compare(req.body.password, user.password, async (err, result) => {
      if (!result) {
        res.status(404).json({ message: "wrong password" });
      }

      if (result && user) {
        //allow to login
        const accessToken = genarateAccessToken(user);
        const refreshToken = genarateRefreshToken(user);

        // store refreshtoken
        await storeRefreshRoken(refreshToken, user.id, res);

        const { password, created_at, updated_at, ...login_info } = user._doc;
        res.status(200).json({ login_info, accessToken });
      }
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const refresh = async (req, res) => {
  const currRefreshToken = req.cookies.refreshToken;

  // console.log(currRefreshToken);
  if (!currRefreshToken) {
    return res.status(401).json({ message: "unauthenticated" });
  }

  jwt.verify(
    currRefreshToken,
    process.env.JWT_REFRESH_KEY,
    async (err, decode) => {
      if (err) {
        return res.status(403).json({ message: "invalid token" });
      }

      const existToken = await Tokens.findOne({ accountID: decode.id });
      if (!existToken) {
        return res.status(404).json({ message: "token is invalid" });
      }

      bcrypt.compare(
        currRefreshToken,
        existToken.token,
        async (err, result) => {
          console.log(result);
          if (!result) {
            return res.status(404).json("token is invalid");
          }
          const newAccessToken = genarateAccessToken(decode); // decode contain information in jwt (use_id in this instance)
          const newRefreshToken = genarateRefreshToken(decode);

          // store refreshtoken
          await storeRefreshRoken(newAccessToken, decode.id, res);

          res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
          });

          res.status(200).json({ accessToken: newAccessToken });
        }
      );
    }
  );
};
module.exports = {
  login,
  register,
  refresh,
};
