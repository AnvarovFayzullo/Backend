const express = require("express");
const routerVenueType = express.Router();
const venueTypeController = require("../controller/venueType.controller");

/**
 * @swagger
 * tags:
 *   name: VenueType
 *   description: VenueType management
 */

/**
 * @swagger
 * /api/venueType:
 *   post:
 *     summary: Create a new venueType
 *     tags: [VenueType]
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
 *         description: VenueType created
 *       500:
 *         description: Server error
 */
routerVenueType.post("/venueType", venueTypeController.createVenueType);

/**
 * @swagger
 * /api/venueType:
 *   get:
 *     summary: Get a list of all venueType
 *     tags: [VenueType]
 *     responses:
 *       200:
 *         description: A list of venueType
 *       500:
 *         description: Server error
 */
routerVenueType.get("/venueType", venueTypeController.getVenueType);

/**
 * @swagger
 * /api/venueType/{id}:
 *   get:
 *     summary: Get a venueType by ID
 *     tags: [VenueType]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The venueType ID
 *     responses:
 *       200:
 *         description: VenueType details
 *       404:
 *         description: VenueType not found
 *       500:
 *         description: Server error
 */
routerVenueType.get("/venueType/:id", venueTypeController.getByIDVenueType);

/**
 * @swagger
 * /api/venueType/{id}:
 *   put:
 *     summary: Update a venueType by ID
 *     tags: [VenueType]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The venueType ID
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
 *         description: VenueType updated
 *       404:
 *         description: VenueType not found
 *       500:
 *         description: Server error
 */
routerVenueType.put("/venueType/:id", venueTypeController.updateVenueType);

/**
 * @swagger
 * /api/venueType/{id}:
 *   delete:
 *     summary: Delete a venueType by ID
 *     tags: [VenueType]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The venueType ID
 *     responses:
 *       200:
 *         description: VenueType deleted
 *       404:
 *         description: VenueType not found
 *       500:
 *         description: Server error
 */
routerVenueType.delete("/venueType/:id", venueTypeController.deleteVenueType);

module.exports = routerVenueType;