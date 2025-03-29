const { Payment } = require('../model')
const { payment_methodValidation } = require("../validation/payment_methodValidation");

exports.createPayment = async (req, res) => {
    const { error } = payment_methodValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        const pay = await Payment.create(req.body);
        res.status(201).send(pay);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getPayment = async (req, res) => {
    try {
        const pay = await Payment.findAll();
        res.status(200).send(pay);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getByIDPayment = async (req, res) => {
    try {
        const pay = await Payment.findByPk(req.params.id);
        if (!pay) return res.status(404).send("Payment not found");

        res.status(200).send(pay);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updatePayment = async (req, res) => {
    const { error } = payment_methodValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const pay = await Payment.findByPk(req.params.id);
        if (!pay) return res.status(404).send("Payment not found");

        await pay.update(req.body);
        res.status(200).send(pay);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deletePayment = async (req, res) => {
    try {
        const pay = await Payment.findByPk(req.params.id);
        if (!pay) return res.status(404).send("Payment not found");

        const Data = pay.toJSON();
        await pay.destroy();
        res.status(204).send(Data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};