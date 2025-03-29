const { Customer, Lang } = require("../model");
const { validateCustomer } = require("../validation/customerValidation");

exports.createCustomer = async (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        const cust = await Customer.create(req.body);
        res.status(201).send(cust);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getCustomers = async (req, res) => {
    try {
        const custs = await Customer.findAll();
        res.status(200).send(custs);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getByIDCustomers = async (req, res) => {
    try {
        const cust = await Customer.findByPk(req.params.id, {
            include: [
                {
                    model: Lang,
                    as: "lang"
                },
            ]
        });
        if (!cust) return res.status(404).send("Customer not found");

        res.status(200).send(cust);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateCustomers = async (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const cust = await Customer.findByPk(req.params.id);
        if (!cust) return res.status(404).send("Customer not found");

        await cust.update(req.body);
        res.status(200).send(cust);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteCustomers = async (req, res) => {
    try {
        const cust = await Customer.findByPk(req.params.id);
        if (!cust) return res.status(404).send("Customer not found");

        const custDATA = cust.toJSON();
        await cust.destroy();
        res.status(204).send(custDATA);
    } catch (error) {
        res.status(500).send(error.message);
    }
};