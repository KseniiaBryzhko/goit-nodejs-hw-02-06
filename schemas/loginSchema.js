const Joi = require("joi");
const { emailRegex } = require("../helpers/regEx");

const loginValidator = (data) => {
  const loginSchema = Joi.object({
    email: Joi.string().pattern(emailRegex).required(),
    password: Joi.string().min(6).required(),
  });
  return loginSchema.validate(data);
};

module.exports = loginValidator;
