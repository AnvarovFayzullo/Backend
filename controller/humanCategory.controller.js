const { HumanCategory, Gender } = require('../model')
const { humen_categoryValidation } = require("../validation/humen_categoryValidation");

exports.createHumanCategory = async (req, res) => {
    const { error } = humen_categoryValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        const humCat = await HumanCategory.create(req.body);
        res.status(201).send(humCat);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getHumanCategory = async (req, res) => {
    try {
        const humCat = await HumanCategory.findAll();
        res.status(200).send(humCat);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getByIDHumanCategory = async (req, res) => {
    try {
        const humCat = await HumanCategory.findByPk(req.params.id, {
            include: [
                {
                    model: Gender,
                    as: "humanGender"
                }
            ]
        });
        if (!humCat) return res.status(404).send("HumanCategory not found");

        res.status(200).send(humCat);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateHumanCategory = async (req, res) => {
    const { error } = humen_categoryValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const humCat = await HumanCategory.findByPk(req.params.id);
        if (!humCat) return res.status(404).send("HumanCategory not found");

        await humCat.update(req.body);
        res.status(200).send(humCat);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteHumanCategory = async (req, res) => {
    try {
        const humCat = await HumanCategory.findByPk(req.params.id);
        if (!humCat) return res.status(404).send("HumanCategory not found");

        const Data = humCat.toJSON();
        await humCat.destroy();
        res.status(204).send(Data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};