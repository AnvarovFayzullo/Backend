const express = require("express");
const routerCountry = express.Router();
const countryController = require("../controller/country.controller");

/**
 * @swagger
 * tags:
 *   name: Country
 *   description: Country management
 */

/**
 * @swagger
 * /api/country:
 *   post:
 *     summary: Create a new country
 *     tags: [Country]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               country:
 *                 type: string
 *     responses:
 *       201:
 *         description: Country created
 *       500:
 *         description: Server error
 */
routerCountry.post("/country", countryController.createCountry);

/**
 * @swagger
 * /api/country:
 *   get:
 *     summary: Get a list of all country
 *     tags: [Country]
 *     responses:
 *       200:
 *         description: A list of country
 *       500:
 *         description: Server error
 */
routerCountry.get("/country", countryController.getCountry);

/**
 * @swagger
 * /api/country/{id}:
 *   get:
 *     summary: Get a country by ID
 *     tags: [Country]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The country ID
 *     responses:
 *       200:
 *         description: Country details
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */
routerCountry.get("/country/:id", countryController.getByIDCountry);

/**
 * @swagger
 * /api/country/{id}:
 *   put:
 *     summary: Update a country by ID
 *     tags: [Country]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The country ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               country:
 *                 type: string
 *     responses:
 *       200:
 *         description: Country updated
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */
routerCountry.put("/country/:id", countryController.updateCountry);

/**
 * @swagger
 * /api/country/{id}:
 *   delete:
 *     summary: Delete a country by ID
 *     tags: [Country]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The country ID
 *     responses:
 *       200:
 *         description: Country deleted
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */
routerCountry.delete("/country/:id", countryController.deleteCountry);

module.exports = routerCountry;