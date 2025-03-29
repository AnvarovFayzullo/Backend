const { CustomerAddres, Customer, Country, Region, District } = require("../model");
const { validateCustomerAddress } = require("../validation/customer_addressValidation");

exports.createCustomerAddres = async (req, res) => {
    const { error } = validateCustomerAddress(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        const cust = await CustomerAddres.create(req.body);
        res.status(201).send(cust);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getCustomerAddress = async (req, res) => {
    try {
        const custs = await CustomerAddres.findAll();
        res.status(200).send(custs);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getByIDCustomerAddress = async (req, res) => {
    try {
        const cust = await CustomerAddres.findByPk(req.params.id, {
            include: [
                {
                    model: Customer,
                    as: "customer"
                },
                {
                    model: Country,
                    as: "country"
                },
                {
                    model: Region,
                    as: "region"
                },
                {
                    model: District,
                    as: "district"
                }
            ]
        });
        if (!cust) return res.status(404).send("CustomerAddres not found");

        res.status(200).send(cust);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateCustomerAddress = async (req, res) => {
    const { error } = validateCustomerAddress(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const cust = await CustomerAddres.findByPk(req.params.id);
        if (!cust) return res.status(404).send("CustomerAddres not found");

        await cust.update(req.body);
        res.status(200).send(cust);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteCustomerAddress = async (req, res) => {
    try {
        const cust = await CustomerAddres.findByPk(req.params.id);
        if (!cust) return res.status(404).send("CustomerAddres not found");

        const custDATA = cust.toJSON();
        await cust.destroy();
        res.status(204).send(custDATA);
    } catch (error) {
        res.status(500).send(error.message);
    }
};