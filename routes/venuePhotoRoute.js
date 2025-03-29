const express = require("express");
const routerVenuePhoto = express.Router();
const venuePhotoController = require("../controller/venuePhoto.controller");

/**
 * @swagger
 * tags:
 *   name: VenuePhoto
 *   description: VenuePhoto management
 */

/**
 * @swagger
 * /api/venuePhoto:
 *   post:
 *     summary: Create a new venuePhoto
 *     tags: [VenuePhoto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venueid:
 *                 type: number
 *               url:
 *                 type: string
 *     responses:
 *       201:
 *         description: VenuePhoto created
 *       500:
 *         description: Server error
 */
routerVenuePhoto.post("/venuePhoto", venuePhotoController.createVenuePhoto);

/**
 * @swagger
 * /api/venuePhoto:
 *   get:
 *     summary: Get a list of all venuePhoto
 *     tags: [VenuePhoto]
 *     responses:
 *       200:
 *         description: A list of venuePhoto
 *       500:
 *         description: Server error
 */
routerVenuePhoto.get("/venuePhoto", venuePhotoController.getVenuePhoto);

/**
 * @swagger
 * /api/venuePhoto/{id}:
 *   get:
 *     summary: Get a venuePhoto by ID
 *     tags: [VenuePhoto]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The venuePhoto ID
 *     responses:
 *       200:
 *         description: VenuePhoto details
 *       404:
 *         description: VenuePhoto not found
 *       500:
 *         description: Server error
 */
routerVenuePhoto.get("/venuePhoto/:id", venuePhotoController.getByIDVenuePhoto);

/**
 * @swagger
 * /api/venuePhoto/{id}:
 *   put:
 *     summary: Update a venuePhoto by ID
 *     tags: [VenuePhoto]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The venuePhoto ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venueid:
 *                 type: number
 *               url:
 *                 type: string
 *     responses:
 *       200:
 *         description: VenuePhoto updated
 *       404:
 *         description: VenuePhoto not found
 *       500:
 *         description: Server error
 */
routerVenuePhoto.put("/venuePhoto/:id", venuePhotoController.updateVenuePhoto);

/**
 * @swagger
 * /api/venuePhoto/{id}:
 *   delete:
 *     summary: Delete a venuePhoto by ID
 *     tags: [VenuePhoto]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The venuePhoto ID
 *     responses:
 *       200:
 *         description: VenuePhoto deleted
 *       404:
 *         description: VenuePhoto not found
 *       500:
 *         description: Server error
 */
routerVenuePhoto.delete("/venuePhoto/:id", venuePhotoController.deleteVenuePhoto);

module.exports = routerVenuePhoto;