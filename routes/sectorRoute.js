const express = require("express");
const routerSector = express.Router();
const sectorController = require("../controller/sector.controller");

/**
 * @swagger
 * tags:
 *   name: Sector
 *   description: Sector management
 */

/**
 * @swagger
 * /api/sector:
 *   post:
 *     summary: Create a new sector
 *     tags: [Sector]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Sector created
 *       500:
 *         description: Server error
 */
routerSector.post("/sector", sectorController.createSector);

/**
 * @swagger
 * /api/sector:
 *   get:
 *     summary: Get a list of all sector
 *     tags: [Sector]
 *     responses:
 *       200:
 *         description: A list of sector
 *       500:
 *         description: Server error
 */
routerSector.get("/sector", sectorController.getSector);

/**
 * @swagger
 * /api/sector/{id}:
 *   get:
 *     summary: Get a sector by ID
 *     tags: [Sector]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The sector ID
 *     responses:
 *       200:
 *         description: Sector details
 *       404:
 *         description: Sector not found
 *       500:
 *         description: Server error
 */
routerSector.get("/sector/:id", sectorController.getByIDSector);

/**
 * @swagger
 * /api/sector/{id}:
 *   put:
 *     summary: Update a sector by ID
 *     tags: [Sector]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The sector ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sector updated
 *       404:
 *         description: Sector not found
 *       500:
 *         description: Server error
 */
routerSector.put("/sector/:id", sectorController.updateSector);

/**
 * @swagger
 * /api/sector/{id}:
 *   delete:
 *     summary: Delete a sector by ID
 *     tags: [Sector]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The sector ID
 *     responses:
 *       200:
 *         description: Sector deleted
 *       404:
 *         description: Sector not found
 *       500:
 *         description: Server error
 */
routerSector.delete("/sector/:id", sectorController.deleteSector);

module.exports = routerSector;