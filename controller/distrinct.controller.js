const { District, Region } = require('../model')
const { validateDistrict } = require("../validation/districtValidation");

exports.createDistrict = async (req, res) => {
    const { error } = validateDistrict(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        const dictrict = await District.create(req.body);
        res.status(201).send(dictrict);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getDistrict = async (req, res) => {
    try {
        const dictrict = await District.findAll();
        res.status(200).send(dictrict);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getByIDDistrict = async (req, res) => {
    try {
        const dictrict = await District.findByPk(req.params.id, {
            include: [
                {
                    model: Region,
                    as: "region"
                }
            ]
        });
        if (!dictrict) return res.status(404).send("District not found");

        res.status(200).send(dictrict);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateDistrict = async (req, res) => {
    const { error } = validateDistrict(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const dictrict = await District.findByPk(req.params.id);
        if (!dictrict) return res.status(404).send("District not found");

        await dictrict.update(req.body);
        res.status(200).send(dictrict);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteDistrict = async (req, res) => {
    try {
        const dictrict = await District.findByPk(req.params.id);
        if (!dictrict) return res.status(404).send("District not found");

        const Data = dictrict.toJSON();
        await dictrict.destroy();
        res.status(204).send(Data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};