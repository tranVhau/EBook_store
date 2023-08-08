const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Tokens } = require("../models");

// convert cookie string to object
function parseCookieString(cookieString) {
  const cookiePairs = cookieString.split(";");
  const cookieObject = {};

  for (const pair of cookiePairs) {
    const [key, value] = pair.trim().split("=");
    cookieObject[key] = decodeURIComponent(value);
  }
  return cookieObject;
}

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

// store refeshtoken
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
    // maxAge: process.env.COOKIE_AGE * 1000,
    domain: process.env.CLIENT_DOMAIN,
    path: "/",
    httpOnly: true,
    sameSite: "lax",
  });
};

module.exports = {
  parseCookieString,
  genarateAccessToken,
  genarateRefreshToken,
  storeRefreshRoken,
};
