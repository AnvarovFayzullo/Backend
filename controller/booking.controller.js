const { Booking, Payment, Delivery, Cart, Discount, Status } = require("../model");
const { validateBooking } = require("../validation/bookingValidation");

exports.createBooking = async (req, res) => {
    const { error } = validateBooking(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        const book = await Booking.create(req.body);
        res.status(201).send(book);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getBooking = async (req, res) => {
    try {
        const item = await Booking.findAll();
        res.status(200).send(item);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getByIDBooking = async (req, res) => {
    try {
        const book = await Booking.findByPk(req.params.id, {
            include: [
                {
                    model: Payment,
                    as: "payment"
                },
                {
                    model: Delivery,
                    as: "delivery"
                },
                {
                    model: Cart,
                    as: "cart"
                },
                {
                    model: Discount,
                    as: "discount"
                },
                {
                    model: Status,
                    as: "status"
                }
            ]
        });
        if (!book) return res.status(404).send("Booking not found");

        res.status(200).send(book);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateBooking = async (req, res) => {
    const { error } = validateBooking(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const book = await Booking.findByPk(req.params.id);
        if (!book) return res.status(404).send("Booking not found");

        await book.update(req.body);
        res.status(200).send(book);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteBooking = async (req, res) => {
    try {
        const book = await Booking.findByPk(req.params.id);
        if (!book) return res.status(404).send("Booking not found");

        const cartDATA = book.toJSON();
        await book.destroy();
        res.status(204).send(cartDATA);
    } catch (error) {
        res.status(500).send(error.message);
    }
};