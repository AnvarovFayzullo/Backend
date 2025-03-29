const Joi = require("joi")

const validateTicket = (a) => {
    const schema = Joi.object({
        event_id: Joi.number().required(),
        seat_id: Joi.number().required(),
        price: Joi.number().required(),
        service_fee: Joi.number().required(),
        status_id: Joi.number().required(),
        ticket_type: Joi.string().required()
    })
    return schema.validate(a)
}

module.exports = { validateTicket }