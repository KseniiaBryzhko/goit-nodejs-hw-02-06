const Joi = require("joi");

const favoriteValidator = (data) => {
  const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
  });
  return updateFavoriteSchema.validate(data);
};

module.exports = favoriteValidator;
