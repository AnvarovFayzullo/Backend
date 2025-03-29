const { VenuePhoto, Venue } = require("../model");
const { validateVenuePhoto } = require("../validation/venue_photoValidation");

exports.createVenuePhoto = async (req, res) => {
    const { error } = validateVenuePhoto(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        const venue = await VenuePhoto.create(req.body);
        res.status(201).send(venue);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getVenuePhoto = async (req, res) => {
    try {
        const custs = await VenuePhoto.findAll();
        res.status(200).send(custs);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getByIDVenuePhoto = async (req, res) => {
    try {
        const venue = await VenuePhoto.findByPk(req.params.id,{
            include: [
                {
                    model: Venue,
                    as: "venue"
                }
            ]
        });
        if (!venue) return res.status(404).send("VenuePhoto not found");

        res.status(200).send(venue);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateVenuePhoto = async (req, res) => {
    const { error } = validateVenuePhoto(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const venue = await VenuePhoto.findByPk(req.params.id);
        if (!venue) return res.status(404).send("VenuePhoto not found");

        await venue.update(req.body);
        res.status(200).send(venue);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteVenuePhoto = async (req, res) => {
    try {
        const venue = await VenuePhoto.findByPk(req.params.id);
        if (!venue) return res.status(404).send("VenuePhoto not found");

        const tickData = venue.toJSON();
        await venue.destroy();
        res.status(204).send(tickData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};