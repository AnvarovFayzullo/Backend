const { Discount } = require('../model')

exports.createDiscount = async (req, res) => {
    try {
        const discount = await Discount.create(req.body);
        res.status(201).send(discount);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getDiscount = async (req, res) => {
    try {
        const discount = await Discount.findAll();
        res.status(200).send(discount);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getByIDDiscount = async (req, res) => {
    try {
        const discount = await Discount.findByPk(req.params.id);
        if (!discount) return res.status(404).send("Discount not found");

        res.status(200).send(discount);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateDiscount = async (req, res) => {
    try {
        const discount = await Discount.findByPk(req.params.id);
        if (!discount) return res.status(404).send("Discount not found");

        await discount.update(req.body);
        res.status(200).send(discount);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteDiscount = async (req, res) => {
    try {
        const discount = await Discount.findByPk(req.params.id);
        if (!discount) return res.status(404).send("Discount not found");

        const Data = discount.toJSON();
        await discount.destroy();
        res.status(204).send(Data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};