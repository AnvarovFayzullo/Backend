const { SeatType } = require('../model')
const { validateSeatType } = require("../validation/seat_typeValidation");

exports.createSeatType = async (req, res) => {
    const { error } = validateSeatType(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        const seat = await SeatType.create(req.body);
        res.status(201).send(seat);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getSeatType = async (req, res) => {
    try {
        const seat = await SeatType.findAll();
        res.status(200).send(seat);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getByIDSeatType = async (req, res) => {
    try {
        const seat = await SeatType.findByPk(req.params.id);
        if (!seat) return res.status(404).send("SeatType not found");

        res.status(200).send(seat);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateSeatType = async (req, res) => {
    const { error } = validateSeatType(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const seat = await SeatType.findByPk(req.params.id);
        if (!seat) return res.status(404).send("SeatType not found");

        await seat.update(req.body);
        res.status(200).send(seat);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteSeatType = async (req, res) => {
    try {
        const seat = await SeatType.findByPk(req.params.id);
        if (!seat) return res.status(404).send("SeatType not found");

        const Data = seat.toJSON();
        await seat.destroy();
        res.status(204).send(Data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};