const express = require("express");
const routerDelivery = express.Router();
const deliveryController = require("../controller/delivery.controller");

/**
 * @swagger
 * tags:
 *   name: Delivery
 *   description: Delivery management
 */

/**
 * @swagger
 * /api/delivery:
 *   post:
 *     summary: Create a new delivery
 *     tags: [Delivery]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Delivery created
 *       500:
 *         description: Server error
 */
routerDelivery.post("/delivery", deliveryController.createDelivery);

/**
 * @swagger
 * /api/delivery:
 *   get:
 *     summary: Get a list of all delivery
 *     tags: [Delivery]
 *     responses:
 *       200:
 *         description: A list of delivery
 *       500:
 *         description: Server error
 */
routerDelivery.get("/delivery", deliveryController.getDelivery);

/**
 * @swagger
 * /api/delivery/{id}:
 *   get:
 *     summary: Get a delivery by ID
 *     tags: [Delivery]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The delivery ID
 *     responses:
 *       200:
 *         description: Delivery details
 *       404:
 *         description: Delivery not found
 *       500:
 *         description: Server error
 */
routerDelivery.get("/delivery/:id", deliveryController.getByIDDelivery);

/**
 * @swagger
 * /api/delivery/{id}:
 *   put:
 *     summary: Update a delivery by ID
 *     tags: [Delivery]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The delivery ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Delivery updated
 *       404:
 *         description: Delivery not found
 *       500:
 *         description: Server error
 */
routerDelivery.put("/delivery/:id", deliveryController.updateDelivery);

/**
 * @swagger
 * /api/delivery/{id}:
 *   delete:
 *     summary: Delete a delivery by ID
 *     tags: [Delivery]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The delivery ID
 *     responses:
 *       200:
 *         description: Delivery deleted
 *       404:
 *         description: Delivery not found
 *       500:
 *         description: Server error
 */
routerDelivery.delete("/delivery/:id", deliveryController.deleteDelivery);

module.exports = routerDelivery;