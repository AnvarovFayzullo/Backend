const express = require("express");
const routerCartItem = express.Router();
const cartItemController = require("../controller/cartItem.controller");

/**
 * @swagger
 * tags:
 *   name: CartItem
 *   description: CartItem management
 */

/**
 * @swagger
 * /api/cartItem:
 *   post:
 *     summary: Create a new cartItem
 *     tags: [CartItem]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               cart_id:
 *                 type: number
 *               quantity:
 *                 type: string
 *     responses:
 *       201:
 *         description: CartItem created
 *       500:
 *         description: Server error
 */
routerCartItem.post("/cartItem", cartItemController.createCartItem);

/**
 * @swagger
 * /api/cartItem:
 *   get:
 *     summary: Get a list of all cartItem
 *     tags: [CartItem]
 *     responses:
 *       200:
 *         description: A list of cartItem
 *       500:
 *         description: Server error
 */
routerCartItem.get("/cartItem", cartItemController.getCartsItem);

/**
 * @swagger
 * /api/cartItem/{id}:
 *   get:
 *     summary: Get a cartItem by ID
 *     tags: [CartItem]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The cartItem ID
 *     responses:
 *       200:
 *         description: CartItem details
 *       404:
 *         description: CartItem not found
 *       500:
 *         description: Server error
 */
routerCartItem.get("/cartItem/:id", cartItemController.getByIDCartItem);

/**
 * @swagger
 * /api/cartItem/{id}:
 *   put:
 *     summary: Update a cartItem by ID
 *     tags: [CartItem]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The cartItem ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               cart_id:
 *                 type: number
 *               quantity:
 *                 type: string
 *     responses:
 *       200:
 *         description: CartItem updated
 *       404:
 *         description: CartItem not found
 *       500:
 *         description: Server error
 */
routerCartItem.put("/cartItem/:id", cartItemController.updateCart);

/**
 * @swagger
 * /api/cartItem/{id}:
 *   delete:
 *     summary: Delete a cartItem by ID
 *     tags: [CartItem]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The cartItem ID
 *     responses:
 *       200:
 *         description: CartItem deleted
 *       404:
 *         description: CartItem not found
 *       500:
 *         description: Server error
 */
routerCartItem.delete("/cartItem/:id", cartItemController.deleteCartItem);

module.exports = routerCartItem;