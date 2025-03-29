const { VenueVenueType, Venue, VenueType } = require("../model");

exports.createVenueVenueType = async (req, res) => {
    try {
        const venue = await VenueVenueType.create(req.body);
        res.status(201).send(venue);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getVenueVenueType = async (req, res) => {
    try {
        const custs = await VenueVenueType.findAll();
        res.status(200).send(custs);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getByIDVenueVenueType = async (req, res) => {
    try {
        const venue = await VenueVenueType.findByPk(req.params.id, {
            include: [
                {
                    model: Venue,
                    as: "venue"
                },
                {
                    model: VenueType,
                    as: "venue_type"
                }
            ]
        });
        if (!venue) return res.status(404).send("VenueVenueType not found");

        res.status(200).send(venue);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateVenueVenueType = async (req, res) => {
    try {
        const venue = await VenueVenueType.findByPk(req.params.id);
        if (!venue) return res.status(404).send("VenueVenueType not found");

        await venue.update(req.body);
        res.status(200).send(venue);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteVenueVenueType = async (req, res) => {
    try {
        const venue = await VenueVenueType.findByPk(req.params.id);
        if (!venue) return res.status(404).send("VenueVenueType not found");

        const tickData = venue.toJSON();
        await venue.destroy();
        res.status(204).send(tickData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};