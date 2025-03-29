const { VenueType } = require("../model");

exports.createVenueType = async (req, res) => {
    try {
        const venue = await VenueType.create(req.body);
        res.status(201).send(venue);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getVenueType = async (req, res) => {
    try {
        const custs = await VenueType.findAll();
        res.status(200).send(custs);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getByIDVenueType = async (req, res) => {
    try {
        const venue = await VenueType.findByPk(req.params.id);
        if (!venue) return res.status(404).send("VenueType not found");

        res.status(200).send(venue);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateVenueType = async (req, res) => {
    try {
        const venue = await VenueType.findByPk(req.params.id);
        if (!venue) return res.status(404).send("VenueType not found");

        await venue.update(req.body);
        res.status(200).send(venue);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteVenueType = async (req, res) => {
    try {
        const venue = await VenueType.findByPk(req.params.id);
        if (!venue) return res.status(404).send("VenueType not found");

        const tickData = venue.toJSON();
        await venue.destroy();
        res.status(204).send(tickData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};