const express = require("express");
const routerCustCards = express.Router();
const customerAddresController = require("../controller/customerAddres.controller");

/**
 * @swagger
 * tags:
 *   name: CustomerAdderes
 *   description: CustomerAdderes management
 */

/**
 * @swagger
 * /api/customerAddres:
 *   post:
 *     summary: Create a new customerAddres
 *     tags: [CustomerAdderes]
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
 *               country_id:
 *                 type: string
 *               region_id:
 *                 type: string
 *               district_id:
 *                 type: string
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat:
 *                 type: string
 *               location:
 *                 type: string
 *               post_index:
 *                 type: string
 *               info:
 *                 type: string
 *     responses:
 *       201:
 *         description: CustomerAdderes created
 *       500:
 *         description: Server error
 */
routerCustCards.post("/customerAddres", customerAddresController.createCustomerAddres);

/**
 * @swagger
 * /api/customerAddres:
 *   get:
 *     summary: Get a list of all customerAddres
 *     tags: [CustomerAdderes]
 *     responses:
 *       200:
 *         description: A list of customerAddres
 *       500:
 *         description: Server error
 */
routerCustCards.get("/customerAddres", customerAddresController.getCustomerAddress);

/**
 * @swagger
 * /api/customerAddres/{id}:
 *   get:
 *     summary: Get a customerAddres by ID
 *     tags: [CustomerAdderes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The customerAddres ID
 *     responses:
 *       200:
 *         description: CustomerAdderes details
 *       404:
 *         description: CustomerAdderes not found
 *       500:
 *         description: Server error
 */
routerCustCards.get("/customerAddres/:id", customerAddresController.getByIDCustomerAddress);

/**
 * @swagger
 * /api/customerAddres/{id}:
 *   put:
 *     summary: Update a customerAddres by ID
 *     tags: [CustomerAdderes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The customerAddres ID
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
 *               country_id:
 *                 type: string
 *               region_id:
 *                 type: string
 *               district_id:
 *                 type: string
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat:
 *                 type: string
 *               location:
 *                 type: string
 *               post_index:
 *                 type: string
 *               info:
 *                 type: string
 *     responses:
 *       200:
 *         description: CustomerAdderes updated
 *       404:
 *         description: CustomerAdderes not found
 *       500:
 *         description: Server error
 */
routerCustCards.put("/customerAddres/:id", customerAddresController.updateCustomerAddress);

/**
 * @swagger
 * /api/customerAddres/{id}:
 *   delete:
 *     summary: Delete a customerAddres by ID
 *     tags: [CustomerAdderes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The customerAddres ID
 *     responses:
 *       200:
 *         description: CustomerAdderes deleted
 *       404:
 *         description: CustomerAdderes not found
 *       500:
 *         description: Server error
 */
routerCustCards.delete("/customerAddres/:id", customerAddresController.deleteCustomerAddress);

module.exports = routerCustCards;