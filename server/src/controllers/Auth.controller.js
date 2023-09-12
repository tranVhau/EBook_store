const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Users, Tokens } = require("../models");
const {
  parseCookieString,
  genarateAccessToken,
  genarateRefreshToken,
  storeRefreshRoken,
} = require("../utils/auth.util");

const me = async (req, res) => {
  try {
    const id = req.user.id;
    const user = await Users.findById(id);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    } else {
      const { password, ...me } = user._doc;
      res.status(200).json({ data: me });
    }
  } catch (error) {
    res.status(500).json(error);
  }
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
      newUser
        .save()
        .then((user) => {
          res.status(200).json({ data: user });
        })
        .catch((err) => {
          if (err.name === "MongoServerError" && err.code === 11000) {
            res.status(422).json({ message: "email already been taken" });
          }
        });
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const login = async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: "wrong email or password" });
    }
    bcrypt.compare(req.body.password, user.password, async (err, result) => {
      if (!result) {
        res.status(404).json({ message: "wrong email or password" });
      }

      if (result && user) {
        //allow to login
        const accessToken = genarateAccessToken(user);
        const refreshToken = genarateRefreshToken(user);

        // store refreshtoken in cookie and db
        await storeRefreshRoken(refreshToken, user.id, res);
        // store accesstoken in cookie
        res.cookie("accessToken", accessToken, {
          maxAge: process.env.COOKIE_AGE * 1000,
          domain: process.env.CLIENT_DOMAIN,
          path: "/",
          // sameSite: "none",
          httpOnly: true,
        });
        const { password, created_at, updated_at, ...login_info } = user._doc;
        res.status(200).json({ data: login_info });
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
          if (!result) {
            return res.status(404).json("token is invalid");
          }
          const newAccessToken = genarateAccessToken(decode); // decode contain information in jwt (use_id in this instance)
          const newRefreshToken = genarateRefreshToken(decode);

          // store refreshtoken
          await storeRefreshRoken(newAccessToken, decode.id, res);

          res.cookie("refreshToken", newRefreshToken, {
            domain: process.env.CLIENT_DOMAIN,
            path: "/",
            httpOnly: true,
            // sameSite: "none",
          });

          res.cookie("accessToken", newRefreshToken, {
            domain: process.env.CLIENT_DOMAIN,
            path: "/",
            httpOnly: true,
            // sameSite: "none",
          });

          res.status(200).json({ message: "token refreshed" });
        }
      );
    }
  );
};

const logout = async (req, res) => {
  try {
    const { refreshToken } = parseCookieString(req.headers.cookie);
    const currentRefreshToken = refreshToken;
    const tokens = await Tokens.find({});
    const tokenLength = tokens.length;
    if (tokens[0]) {
      tokens.forEach((tokenField, index) => {
        bcrypt.compare(
          currentRefreshToken,
          tokenField.token,
          async (error, result) => {
            if (result) {
              await Tokens.deleteOne({ token: tokenField.token });
              res.clearCookie("refreshToken", {
                domain: process.env.CLIENT_DOMAIN,
                path: "/",
                httpOnly: true,
              });
              res.clearCookie("accessToken", {
                domain: process.env.CLIENT_DOMAIN,
                path: "/",
                httpOnly: true,
              });
              res.status(200).json({ message: "logout successfully" });
            } else {
              if (index + 1 === tokenLength) {
                res.status(404).json({ message: "you were not loged in" });
              }
            }
          }
        );
      });
    } else {
      res.status(404).json({ message: "you were not loged in" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const forgot = async (req, res) => {
  const { email } = req.body;
  try {
    // res.status(201).json(email);
    res.send("123");
  } catch (error) {}
};
module.exports = {
  me,
  login,
  register,
  refresh,
  logout,
  forgot,
};
