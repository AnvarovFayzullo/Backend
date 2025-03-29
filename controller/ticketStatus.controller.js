const { TicketStatus } = require("../model");
const { validateTicketStatus } = require("../validation/ticketStatus");

exports.createTicketS = async (req, res) => {
    const { error } = validateTicketStatus(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        const tick = await TicketStatus.create(req.body);
        res.status(201).send(tick);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getTicketS = async (req, res) => {
    try {
        const custs = await TicketStatus.findAll();
        res.status(200).send(custs);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getByIDTicketS = async (req, res) => {
    try {
        const tick = await TicketStatus.findByPk(req.params.id);
        if (!tick) return res.status(404).send("TicketStatus not found");

        res.status(200).send(tick);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateTicketS = async (req, res) => {
    const { error } = validateTicketStatus(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const tick = await TicketStatus.findByPk(req.params.id);
        if (!tick) return res.status(404).send("TicketStatus not found");

        await tick.update(req.body);
        res.status(200).send(tick);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteTicketS = async (req, res) => {
    try {
        const tick = await TicketStatus.findByPk(req.params.id);
        if (!tick) return res.status(404).send("TicketStatus not found");

        const tickData = tick.toJSON();
        await tick.destroy();
        res.status(204).send(tickData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};