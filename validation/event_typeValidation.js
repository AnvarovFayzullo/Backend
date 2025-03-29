const Joi = require("joi");

const eventValidate = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
    parent_event_type_id: Joi.string().required()
  });

  return schema.validate(data);  
};

module.exports = { eventValidate };
