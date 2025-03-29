const { Cart, Customer, Status } = require("../model");
const { validateCart } = require("../validation/cartV");

exports.createCart = async (req, res) => {
    const { error } = validateCart(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        const cart = await Cart.create(req.body);
        res.status(201).send(cart);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getCarts = async (req, res) => {
    try {
        const custs = await Cart.findAll();
        res.status(200).send(custs);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getByIDCart = async (req, res) => {
    try {
        const cart = await Cart.findByPk(req.params.id, {
            include: [
                {
                    model: Customer,
                    as: "customer"
                },
                {
                    model: Status,
                    as: "status"
                }
            ]
        });
        if (!cart) return res.status(404).send("Cart not found");

        res.status(200).send(cart);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateCart = async (req, res) => {
    const { error } = validateCart(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const cart = await Cart.findByPk(req.params.id);
        if (!cart) return res.status(404).send("Cart not found");

        await cart.update(req.body);
        res.status(200).send(cart);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteCart = async (req, res) => {
    try {
        const cart = await Cart.findByPk(req.params.id);
        if (!cart) return res.status(404).send("Cart not found");

        const cartDATA = cart.toJSON();
        await cart.destroy();
        res.status(204).send(cartDATA);
    } catch (error) {
        res.status(500).send(error.message);
    }
};