const Joi = require("joi");

const humen_categoryValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
    stage_age: Joi.string().required(),
    finish_age: Joi.string().required(),
    gender: Joi.required(),
  });

  return schema.validate(data);
};

module.exports = { humen_categoryValidation };
