const Joi = require("joi");

const validateVenuePhoto = (venuePhoto) => {
  const schema = Joi.object({
    venueid: Joi.number().integer().required(),
    url: Joi.string().uri().required(),
  });

  return schema.validate(venuePhoto);
};

module.exports = { validateVenuePhoto };
