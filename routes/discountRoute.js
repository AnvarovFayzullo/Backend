const express = require("express");
const routerDiscount = express.Router();
const discountController = require("../controller/discount.controller");

/**
 * @swagger
 * tags:
 *   name: Discount
 *   description: Discount management
 */

/**
 * @swagger
 * /api/discount:
 *   post:
 *     summary: Create a new discount
 *     tags: [Discount]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               discount:
 *                 type: number
 *               finish_date:
 *                 type: date
 *     responses:
 *       201:
 *         description: Discount created
 *       500:
 *         description: Server error
 */
routerDiscount.post("/discount", discountController.createDiscount);

/**
 * @swagger
 * /api/discount:
 *   get:
 *     summary: Get a list of all discount
 *     tags: [Discount]
 *     responses:
 *       200:
 *         description: A list of discount
 *       500:
 *         description: Server error
 */
routerDiscount.get("/discount", discountController.getDiscount);

/**
 * @swagger
 * /api/discount/{id}:
 *   get:
 *     summary: Get a discount by ID
 *     tags: [Discount]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The discount ID
 *     responses:
 *       200:
 *         description: Discount details
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 */
routerDiscount.get("/discount/:id", discountController.getByIDDiscount);

/**
 * @swagger
 * /api/discount/{id}:
 *   put:
 *     summary: Update a discount by ID
 *     tags: [Discount]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The discount ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               discount:
 *                 type: number
 *               finish_date:
 *                 type: date
 *     responses:
 *       200:
 *         description: Discount updated
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 */
routerDiscount.put("/discount/:id", discountController.updateDiscount);

/**
 * @swagger
 * /api/discount/{id}:
 *   delete:
 *     summary: Delete a discount by ID
 *     tags: [Discount]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The discount ID
 *     responses:
 *       200:
 *         description: Discount deleted
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 */
routerDiscount.delete("/discount/:id", discountController.deleteDiscount);

module.exports = routerDiscount;