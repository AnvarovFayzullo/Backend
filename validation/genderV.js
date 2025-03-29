const Joi = require("joi");

const gender_Validation = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
    });

    return schema.validate(data);
};

module.exports = { gender_Validation };
