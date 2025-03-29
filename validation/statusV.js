const Joi = require("joi");

const validateStatus = (data) => {
    const schema = Joi.object({
        status: Joi.string().required(),
    });

    return schema.validate(data);
};

module.exports = { validateStatus };
