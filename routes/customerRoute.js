const express = require("express");
const routerCust = express.Router();
const customerController = require("../controller/customer.controller");

/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: Customer management
 */

/**
 * @swagger
 * /api/customer:
 *   post:
 *     summary: Create a new customer
 *     tags: [Customer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               bith_date:
 *                 type: string
 *                 format: date
 *               gender:
 *                 type: string
 *               hashed_refresh_token:
 *                 type: string
 *               lang_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: Customer created
 *       500:
 *         description: Server error
 */
routerCust.post("/customer", customerController.createCustomer);

/**
 * @swagger
 * /api/customer:
 *   get:
 *     summary: Get a list of all customer
 *     tags: [Customer]
 *     responses:
 *       200:
 *         description: A list of customer
 *       500:
 *         description: Server error
 */
routerCust.get("/customer", customerController.getCustomers);

/**
 * @swagger
 * /api/customer/{id}:
 *   get:
 *     summary: Get a customer by ID
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The customer ID
 *     responses:
 *       200:
 *         description: Customer details
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
routerCust.get("/customer/:id", customerController.getByIDCustomers);

/**
 * @swagger
 * /api/customer/{id}:
 *   put:
 *     summary: Update a customer by ID
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The customer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               bith_date:
 *                 type: string
 *                 format: date
 *               gender:
 *                 type: string
 *               hashed_refresh_token:
 *                 type: string
 *               lang_id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Customer updated
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
routerCust.put("/customer/:id", customerController.updateCustomers);

/**
 * @swagger
 * /api/customer/{id}:
 *   delete:
 *     summary: Delete a customer by ID
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The customer ID
 *     responses:
 *       200:
 *         description: Customer deleted
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
routerCust.delete("/customer/:id", customerController.deleteCustomers);

module.exports = routerCust;