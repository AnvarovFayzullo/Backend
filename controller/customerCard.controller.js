const { CustomerCard, Customer } = require("../model");
const { validateCustomerCard } = require("../validation/customerCardValidation");

exports.createCustomerCard = async (req, res) => {
    const { error } = validateCustomerCard(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        const cust = await CustomerCard.create(req.body);
        res.status(201).send(cust);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getCustomerCards = async (req, res) => {
    try {
        const custs = await CustomerCard.findAll();
        res.status(200).send(custs);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getByIDCustomerCards = async (req, res) => {
    try {
        const cust = await CustomerCard.findByPk(req.params.id, {
            include: [
                {
                    model: Customer,
                    as: "customer"
                }
            ]
        });
        if (!cust) return res.status(404).send("CustomerCard not found");

        res.status(200).send(cust);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateCustomerCards = async (req, res) => {
    const { error } = validateCustomerCard(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const cust = await CustomerCard.findByPk(req.params.id);
        if (!cust) return res.status(404).send("CustomerCard not found");

        await cust.update(req.body);
        res.status(200).send(cust);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteCustomerCards = async (req, res) => {
    try {
        const cust = await CustomerCard.findByPk(req.params.id);
        if (!cust) return res.status(404).send("CustomerCard not found");

        const custDATA = cust.toJSON();
        await cust.destroy();
        res.status(204).send(custDATA);
    } catch (error) {
        res.status(500).send(error.message);
    }
};