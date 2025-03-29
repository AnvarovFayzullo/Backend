const { Status } = require('../model')
const { validateStatus } = require("../validation/statusV");

exports.createStatus = async (req, res) => {
    const { error } = validateStatus(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        const status = await Status.create(req.body);
        res.status(201).send(status);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getStatus = async (req, res) => {
    try {
        const status = await Status.findAll();
        res.status(200).send(status);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getByIDStatus = async (req, res) => {
    try {
        const status = await Status.findByPk(req.params.id);
        if (!status) return res.status(404).send("Status not found");

        res.status(200).send(status);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateStatus = async (req, res) => {
    const { error } = validateStatus(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const status = await Status.findByPk(req.params.id);
        if (!status) return res.status(404).send("Status not found");

        await status.update(req.body);
        res.status(200).send(status);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteStatus = async (req, res) => {
    try {
        const status = await Status.findByPk(req.params.id);
        if (!status) return res.status(404).send("Status not found");

        const Data = status.toJSON();
        await status.destroy();
        res.status(204).send(Data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};