const jwt = require("jsonwebtoken");
const joi = require("joi");
const Joi = require("joi");
const { parseCookieString } = require("../utils/auth.util");

const verifyToken = async (req, res, next) => {
  // const token = req.headers.token.split(" ")[1]; // get token after 'Bearer'
  try {
    const { accessToken } = parseCookieString(req.headers.cookie);

    if (accessToken) {
      jwt.verify(accessToken, process.env.JWT_SECRET_KEY, (err, decode) => {
        if (err) {
          return res.status(403).json({ message: "token is invalid" });
        }
        req.user = decode;
        next();
      });
    } else {
      res.status(401).json({ message: "unauthenticated" });
    }
  } catch (error) {
    res.status(401).json({ message: "unauthenticated" });
  }
};

const policy = (req, res, next) => {
  const { email, password, phone, name } = req.body;
  const schema = joi.object({
    name: Joi.string().min(2).messages({
      "string.min": "name must at least 2 characters",
    }),
    email: Joi.string().email().required().messages({
      "string.base": "email must be a string",
      "string.email": "email format is invalid",
      "any.required": "email not be empty",
    }),
    password: Joi.string()
      .min(8)
      .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)"))
      .required()
      .messages({
        "string.base": "Password must be a string",
        "string.empty": "Password is not allowed to be empty",
        "string.min": "Password must have a minimum length of {#limit}",
        "string.pattern.base":
          "Password must have at least one lowercase letter, one uppercase letter, one digit",
        "any.required": "Password is a required field",
      }),
    phone: Joi.string()
      .regex(/^[0-9]{10}$/)
      .messages({ "string.pattern.base": `Phone number must have 10 digits.` }),
  });

  if (req._parsedUrl.pathname == "/register") {
    const error = schema.validate({ name, email, password, phone });
    if (error.error) {
      return res.status(400).json({ message: error.error.details[0].message });
    } else {
      next();
    }
  } else if (req._parsedUrl.pathname == "/forgot") {
    const schema_reset = joi.object({
      email: Joi.string().email().required().messages({
        "string.base": "email must be a string",
        "string.email": "email format is invalid",
        "any.required": "email not be empty",
      }),
    });

    const error = schema_reset.validate({ email: email });
    if (error.error) {
      return res.status(400).json({ message: error.error.details[0].message });
    } else {
      next();
    }
  } else {
    const error = schema.validate({ email, password });
    if (error.error) {
      return res.status(400).json({ message: error.error.details[0].message });
    } else {
      next();
    }
  }
};

module.exports = { verifyToken, policy };
