const Joi = require("joi");
const { emailRegex } = require("../helpers/regEx");

const emailValidator = (data) => {
  const userEmailSchema = Joi.object({
    email: Joi.string().pattern(emailRegex).required(),
  });
  return userEmailSchema.validate(data);
};

module.exports = emailValidator;
