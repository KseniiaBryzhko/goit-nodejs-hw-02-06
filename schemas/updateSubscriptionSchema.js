const Joi = require("joi");

const subscriptionValidator = (data) => {
  const updateSubscriptionSchema = Joi.object({
    subscription: Joi.string().required().valid("starter", "pro", "business"),
  });
  return updateSubscriptionSchema.validate(data);
};

module.exports = subscriptionValidator;
