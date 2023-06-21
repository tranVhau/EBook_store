const joi = require("joi");
const Joi = require("joi");

const validatePayment = (req, res, next) => {
  const { email, order_no } = req.body;
  const schema = joi.object({
    order_no: Joi.required().messages({
      "any.required": "email not be empty",
    }),
    email: Joi.string().email().required().messages({
      "string.base": "email must be a string",
      "string.email": "email format is invalid",
      "any.required": "email not be empty",
    }),
  });
  const error = schema.validate({ email, order_no });
  if (error.error) {
    return res.json(error);
    // return res.status(400).json({ message: error.error.details[0].message });
  } else {
    next();
  }
};

module.exports = { validatePayment };
