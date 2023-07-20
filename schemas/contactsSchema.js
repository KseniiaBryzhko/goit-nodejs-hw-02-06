const Joi = require("joi");

const dataValidator = (data) => {
  const contactsSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean(),
  });
  return contactsSchema.validate(data);
};

module.exports = dataValidator;
