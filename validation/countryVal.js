const Joi = require("joi");

const validateCountry = (data) => {
    const schema = Joi.object({
        country: Joi.string().required(),
    });

    return schema.validate(data);
};

module.exports = { validateCountry };
