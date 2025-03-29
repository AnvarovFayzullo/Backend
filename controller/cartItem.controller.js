const { CartItem, Ticket, Cart } = require("../model");
const { validateCartItem } = require("../validation/cart_itemValidation");

exports.createCartItem = async (req, res) => {
    const { error } = validateCartItem(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        const cart = await CartItem.create(req.body);
        res.status(201).send(cart);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getCartsItem = async (req, res) => {
    try {
        const custs = await CartItem.findAll();
        res.status(200).send(custs);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getByIDCartItem = async (req, res) => {
    try {
        const cart = await CartItem.findByPk(req.params.id, {
            include: [
                {
                    model: Ticket,
                    as: "ticket"
                },
                {
                    model: Cart,
                    as: "cart"
                }
            ]
        });
        if (!cart) return res.status(404).send("CartItem not found");

        res.status(200).send(cart);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateCart = async (req, res) => {
    const { error } = validateCartItem(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const cart = await CartItem.findByPk(req.params.id);
        if (!cart) return res.status(404).send("CartItem not found");

        await cart.update(req.body);
        res.status(200).send(cart);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteCartItem = async (req, res) => {
    try {
        const cart = await CartItem.findByPk(req.params.id);
        if (!cart) return res.status(404).send("CartItem not found");

        const cartDATA = cart.toJSON();
        await cart.destroy();
        res.status(204).send(cartDATA);
    } catch (error) {
        res.status(500).send(error.message);
    }
};