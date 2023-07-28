const Joi = require("joi");
const { emailRegex } = require("../helpers/regEx");

const registerValidator = (data) => {
  const registerSchema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string().pattern(emailRegex).required(),
    subscription: Joi.string(),
  });
  return registerSchema.validate(data);
};

module.exports = registerValidator;
