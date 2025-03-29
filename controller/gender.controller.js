const { Gender } = require('../model')
const { gender_Validation } = require("../validation/genderV");

exports.createGender = async (req, res) => {
    const { error } = gender_Validation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        const gender = await Gender.create(req.body);
        res.status(201).send(gender);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getGender = async (req, res) => {
    try {
        const gender = await Gender.findAll();
        res.status(200).send(gender);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getByIDGender = async (req, res) => {
    try {
        const gender = await Gender.findByPk(req.params.id);
        if (!gender) return res.status(404).send("Gender not found");

        res.status(200).send(gender);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateGender = async (req, res) => {
    const { error } = gender_Validation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const gender = await Gender.findByPk(req.params.id);
        if (!gender) return res.status(404).send("Gender not found");

        await gender.update(req.body);
        res.status(200).send(gender);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteGender = async (req, res) => {
    try {
        const gender = await Gender.findByPk(req.params.id);
        if (!gender) return res.status(404).send("Gender not found");

        const Data = gender.toJSON();
        await gender.destroy();
        res.status(204).send(Data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};