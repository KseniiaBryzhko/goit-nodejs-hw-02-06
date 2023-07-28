const Joi = require("joi");
const { emailRegex } = require("../helpers/regEx");

const dataValidator = (data) => {
  const contactsSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegex).required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean(),
  });
  return contactsSchema.validate(data);
};

module.exports = dataValidator;
