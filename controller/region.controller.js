const { Region } = require('../model')
const { pregionValidation } = require("../validation/regionValidation");

exports.createRegion = async (req, res) => {
    const { error } = pregionValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        const region = await Region.create(req.body);
        res.status(201).send(region);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getRegion = async (req, res) => {
    try {
        const region = await Region.findAll();
        res.status(200).send(region);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getByIDRegion = async (req, res) => {
    try {
        const region = await Region.findByPk(req.params.id);
        if (!region) return res.status(404).send("Region not found");

        res.status(200).send(region);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateRegion = async (req, res) => {
    const { error } = pregionValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const region = await Region.findByPk(req.params.id);
        if (!region) return res.status(404).send("Region not found");

        await region.update(req.body);
        res.status(200).send(region);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteRegion = async (req, res) => {
    try {
        const region = await Region.findByPk(req.params.id);
        if (!region) return res.status(404).send("Region not found");

        const Data = region.toJSON();
        await region.destroy();
        res.status(204).send(Data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};