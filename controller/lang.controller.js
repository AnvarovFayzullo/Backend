const { Lang } = require('../model')
const { langValidation } = require("../validation/langValidation");

exports.createLang = async (req, res) => {
    const { error } = langValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        const lang = await Lang.create(req.body);
        res.status(201).send(lang);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getLang = async (req, res) => {
    try {
        const lang = await Lang.findAll();
        res.status(200).send(lang);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getByIDLang = async (req, res) => {
    try {
        const lang = await Lang.findByPk(req.params.id);
        if (!lang) return res.status(404).send("Lang not found");

        res.status(200).send(lang);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateLang = async (req, res) => {
    const { error } = langValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const lang = await Lang.findByPk(req.params.id);
        if (!lang) return res.status(404).send("Lang not found");

        await lang.update(req.body);
        res.status(200).send(lang);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteLang = async (req, res) => {
    try {
        const lang = await Lang.findByPk(req.params.id);
        if (!lang) return res.status(404).send("Lang not found");

        const Data = lang.toJSON();
        await lang.destroy();
        res.status(204).send(Data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};