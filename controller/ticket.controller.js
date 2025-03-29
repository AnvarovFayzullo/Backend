const { Ticket, Event, Seat, TicketStatus, Status } = require("../model");
const { validateTicket } = require("../validation/ticketV");

exports.createTicket = async (req, res) => {
    const { error } = validateTicket(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        const tick = await Ticket.create(req.body);
        res.status(201).send(tick);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getTicket = async (req, res) => {
    try {
        const custs = await Ticket.findAll();
        res.status(200).send(custs);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getByIDTicket = async (req, res) => {
    try {
        const tick = await Ticket.findByPk(req.params.id, {
            include: [
                {
                    model: Event,
                    as: "event"
                },
                {
                    model: Seat,
                    as: "seat"
                },
                {
                    model: TicketStatus,
                    as: "ticketStatus"
                },
                {
                    model: Status,
                    as: "status"
                }
            ]
        });
        if (!tick) return res.status(404).send("Ticket not found");

        res.status(200).send(tick);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateTicket = async (req, res) => {
    const { error } = validateTicket(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const tick = await Ticket.findByPk(req.params.id);
        if (!tick) return res.status(404).send("Ticket not found");

        await tick.update(req.body);
        res.status(200).send(tick);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteTicket = async (req, res) => {
    try {
        const tick = await Ticket.findByPk(req.params.id);
        if (!tick) return res.status(404).send("Ticket not found");

        const tickData = tick.toJSON();
        await tick.destroy();
        res.status(204).send(tickData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};