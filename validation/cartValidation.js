const Joi = require("joi");

const validateCart = (data) => {
    const schema = Joi.object({
        customer_id: Joi.number().integer().positive().required(),
        createdAt: Joi.date().required(),
        fineshedAt: Joi.date().greater(Joi.ref("createdAt")).optional(),
        status_id: Joi.number().integer().positive().required(),
    });

    return schema.validate(data);
};

module.exports = { validateCart };
