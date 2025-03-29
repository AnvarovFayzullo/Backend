const Joi = require("joi");

const validateCart = (data) => {
    const schema = Joi.object({
        customer_id: Joi.number().integer().positive().required(),
        finishedAt: Joi.date().optional(),
        status_id: Joi.number().integer().positive().required(),
    });

    return schema.validate(data);
};

module.exports = { validateCart };