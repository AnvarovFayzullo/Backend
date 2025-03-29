const Joi = require("joi")

const validateTicketStatus = (a) => {
    const schema = Joi.object({
        name: Joi.string().required(),
    })
    return schema.validate(a)
}

module.exports = { validateTicketStatus }