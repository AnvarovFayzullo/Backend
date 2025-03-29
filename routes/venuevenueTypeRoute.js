const express = require("express");
const routerVenueVenueType = express.Router();
const venueTypeController = require("../controller/venueVenueTYpe.controller");

/**
 * @swagger
 * tags:
 *   name: VenueVenueType
 *   description: VenueVenueType management
 */

/**
 * @swagger
 * /api/venueVenueType:
 *   post:
 *     summary: Create a new venueVenueType
 *     tags: [VenueVenueType]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venueId:
 *                 type: string
 *               venuetypeId:
 *                 type: string
 *     responses:
 *       201:
 *         description: VenueVenueType created
 *       500:
 *         description: Server error
 */
routerVenueVenueType.post("/venueVenueType", venueTypeController.createVenueVenueType);

/**
 * @swagger
 * /api/venueVenueType:
 *   get:
 *     summary: Get a list of all venueVenueType
 *     tags: [VenueVenueType]
 *     responses:
 *       200:
 *         description: A list of venueVenueType
 *       500:
 *         description: Server error
 */
routerVenueVenueType.get("/venueVenueType", venueTypeController.getVenueVenueType);

/**
 * @swagger
 * /api/venueVenueType/{id}:
 *   get:
 *     summary: Get a venueVenueType by ID
 *     tags: [VenueVenueType]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The venueVenueType ID
 *     responses:
 *       200:
 *         description: VenueVenueType details
 *       404:
 *         description: VenueVenueType not found
 *       500:
 *         description: Server error
 */
routerVenueVenueType.get("/venueVenueType/:id", venueTypeController.getByIDVenueVenueType);

/**
 * @swagger
 * /api/venueVenueType/{id}:
 *   put:
 *     summary: Update a venueVenueType by ID
 *     tags: [VenueVenueType]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The venueVenueType ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venueId:
 *                 type: string
 *               venuetypeId:
 *                 type: string
 *     responses:
 *       200:
 *         description: VenueVenueType updated
 *       404:
 *         description: VenueVenueType not found
 *       500:
 *         description: Server error
 */
routerVenueVenueType.put("/venueVenueType/:id", venueTypeController.updateVenueVenueType);

/**
 * @swagger
 * /api/venueVenueType/{id}:
 *   delete:
 *     summary: Delete a venueVenueType by ID
 *     tags: [VenueVenueType]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The venueVenueType ID
 *     responses:
 *       200:
 *         description: VenueVenueType deleted
 *       404:
 *         description: VenueVenueType not found
 *       500:
 *         description: Server error
 */
routerVenueVenueType.delete("/venueVenueType/:id", venueTypeController.deleteVenueVenueType);

module.exports = routerVenueVenueType;