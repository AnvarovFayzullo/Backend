const express = require("express");
const routerCustCards = express.Router();
const customerCardController = require("../controller/customerCard.controller");

/**
 * @swagger
 * tags:
 *   name: CustomerCard
 *   description: CustomerCard management
 */

/**
 * @swagger
 * /api/customerCard:
 *   post:
 *     summary: Create a new customerCard
 *     tags: [CustomerCard]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: string
 *               month:
 *                 type: date
 *               is_active:
 *                 type: string
 *               is_main:
 *                 type: string
 *     responses:
 *       201:
 *         description: CustomerCard created
 *       500:
 *         description: Server error
 */
routerCustCards.post("/customerCard", customerCardController.createCustomerCard);

/**
 * @swagger
 * /api/customerCard:
 *   get:
 *     summary: Get a list of all customerCard
 *     tags: [CustomerCard]
 *     responses:
 *       200:
 *         description: A list of customerCard
 *       500:
 *         description: Server error
 */
routerCustCards.get("/customerCard", customerCardController.getCustomerCards);

/**
 * @swagger
 * /api/customerCard/{id}:
 *   get:
 *     summary: Get a customerCard by ID
 *     tags: [CustomerCard]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The customerCard ID
 *     responses:
 *       200:
 *         description: CustomerCard details
 *       404:
 *         description: CustomerCard not found
 *       500:
 *         description: Server error
 */
routerCustCards.get("/customerCard/:id", customerCardController.getByIDCustomerCards);

/**
 * @swagger
 * /api/customerCard/{id}:
 *   put:
 *     summary: Update a customerCard by ID
 *     tags: [CustomerCard]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The customerCard ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: string
 *               month:
 *                 type: date
 *               is_active:
 *                 type: string
 *               is_main:
 *                 type: string
 *     responses:
 *       200:
 *         description: CustomerCard updated
 *       404:
 *         description: CustomerCard not found
 *       500:
 *         description: Server error
 */
routerCustCards.put("/customerCard/:id", customerCardController.updateCustomerCards);

/**
 * @swagger
 * /api/customerCard/{id}:
 *   delete:
 *     summary: Delete a customerCard by ID
 *     tags: [CustomerCard]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The customerCard ID
 *     responses:
 *       200:
 *         description: CustomerCard deleted
 *       404:
 *         description: CustomerCard not found
 *       500:
 *         description: Server error
 */
routerCustCards.delete("/customerCard/:id", customerCardController.deleteCustomerCards);

module.exports = routerCustCards;