const Joi = require("joi");

const validatePayment = (req, res, next) => {
  const { email, cartItems } = req.body;
  console.log(cartItems);
  const schema = Joi.object({
    email: Joi.string().email().required().messages({
      "string.base": "email must be a string",
      "string.email": "email format is invalid",
      "any.required": "email not be empty",
    }),
    cartItems: Joi.array().min(1).required().messages({
      "array.min": "cart cannot be empty",
      "any.required": "cart cannot be empty",
    }),
  });
  const error = schema.validate({ email, order_no });
  if (error.error) {
    res.status(400).json({ message: error.error.details[0].message });
  } else {
    next();
  }
};

module.exports = { validatePayment };
