const express = require("express");
const routerCart = express.Router();
const cartController = require("../controller/cart.controller");

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Cart management
 */

/**
 * @swagger
 * /api/cart:
 *   post:
 *     summary: Create a new cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               finishedAt:
 *                 type: date
 *               status_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cart created
 *       500:
 *         description: Server error
 */
routerCart.post("/cart", cartController.createCart);

/**
 * @swagger
 * /api/cart:
 *   get:
 *     summary: Get a list of all cart
 *     tags: [Cart]
 *     responses:
 *       200:
 *         description: A list of cart
 *       500:
 *         description: Server error
 */
routerCart.get("/cart", cartController.getCarts);

/**
 * @swagger
 * /api/cart/{id}:
 *   get:
 *     summary: Get a cart by ID
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The cart ID
 *     responses:
 *       200:
 *         description: Cart details
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
routerCart.get("/cart/:id", cartController.getByIDCart);

/**
 * @swagger
 * /api/cart/{id}:
 *   put:
 *     summary: Update a cart by ID
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The cart ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               finishedAt:
 *                 type: string
 *               status_id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cart updated
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
routerCart.put("/cart/:id", cartController.updateCart);

/**
 * @swagger
 * /api/cart/{id}:
 *   delete:
 *     summary: Delete a cart by ID
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The cart ID
 *     responses:
 *       200:
 *         description: Cart deleted
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
routerCart.delete("/cart/:id", cartController.deleteCart);

module.exports = routerCart;