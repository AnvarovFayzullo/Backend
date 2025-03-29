const express = require("express");
const routerPay = express.Router();
const paymentController = require("../controller/payment.controller");

/**
 * @swagger
 * tags:
 *   name: Payment
 *   description: Payment management
 */

/**
 * @swagger
 * /api/payment:
 *   post:
 *     summary: Create a new payment
 *     tags: [Payment]
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
 *         description: Payment created
 *       500:
 *         description: Server error
 */
routerPay.post("/payment", paymentController.createPayment);

/**
 * @swagger
 * /api/payment:
 *   get:
 *     summary: Get a list of all payment
 *     tags: [Payment]
 *     responses:
 *       200:
 *         description: A list of payment
 *       500:
 *         description: Server error
 */
routerPay.get("/payment", paymentController.getPayment);

/**
 * @swagger
 * /api/payment/{id}:
 *   get:
 *     summary: Get a payment by ID
 *     tags: [Payment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The payment ID
 *     responses:
 *       200:
 *         description: Payment details
 *       404:
 *         description: Payment not found
 *       500:
 *         description: Server error
 */
routerPay.get("/payment/:id", paymentController.getByIDPayment);

/**
 * @swagger
 * /api/payment/{id}:
 *   put:
 *     summary: Update a payment by ID
 *     tags: [Payment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The payment ID
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
 *         description: Payment updated
 *       404:
 *         description: Payment not found
 *       500:
 *         description: Server error
 */
routerPay.put("/payment/:id", paymentController.updatePayment);

/**
 * @swagger
 * /api/payment/{id}:
 *   delete:
 *     summary: Delete a payment by ID
 *     tags: [Payment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The payment ID
 *     responses:
 *       200:
 *         description: Payment deleted
 *       404:
 *         description: Payment not found
 *       500:
 *         description: Server error
 */
routerPay.delete("/payment/:id", paymentController.deletePayment);

module.exports = routerPay;