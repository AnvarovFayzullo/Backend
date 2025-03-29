const express = require("express");
const routerRegion = express.Router();
const regionController = require("../controller/region.controller");

/**
 * @swagger
 * tags:
 *   name: Region
 *   description: Region management
 */

/**
 * @swagger
 * /api/region:
 *   post:
 *     summary: Create a new region
 *     tags: [Region]
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
 *         description: Region created
 *       500:
 *         description: Server error
 */
routerRegion.post("/region", regionController.createRegion);

/**
 * @swagger
 * /api/region:
 *   get:
 *     summary: Get a list of all region
 *     tags: [Region]
 *     responses:
 *       200:
 *         description: A list of region
 *       500:
 *         description: Server error
 */
routerRegion.get("/region", regionController.getRegion);

/**
 * @swagger
 * /api/region/{id}:
 *   get:
 *     summary: Get a region by ID
 *     tags: [Region]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The region ID
 *     responses:
 *       200:
 *         description: Region details
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */
routerRegion.get("/region/:id", regionController.getByIDRegion);

/**
 * @swagger
 * /api/region/{id}:
 *   put:
 *     summary: Update a region by ID
 *     tags: [Region]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The region ID
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
 *         description: Region updated
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */
routerRegion.put("/region/:id", regionController.updateRegion);

/**
 * @swagger
 * /api/region/{id}:
 *   delete:
 *     summary: Delete a region by ID
 *     tags: [Region]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The region ID
 *     responses:
 *       200:
 *         description: Region deleted
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */
routerRegion.delete("/region/:id", regionController.deleteRegion);

module.exports = routerRegion;