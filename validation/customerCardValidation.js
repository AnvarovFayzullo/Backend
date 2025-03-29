const Joi = require("joi");

const validateCustomerCard = (customerCard) => {
  const schema = Joi.object({
    customer_id: Joi.number().integer().required(),
    name: Joi.string().required(),
    phone: Joi.string().required(),
    number: Joi.string().required(),
    year: Joi.string().length(4).required(),
    month: Joi.string().length(2).required(),
    is_active: Joi.boolean(),
    is_main: Joi.boolean(),
  });

  return schema.validate(customerCard);
};

module.exports = { validateCustomerCard };
