const express = require("express");
const routerVenue = express.Router();
const venueController = require("../controller/venue.controller");

/**
 * @swagger
 * tags:
 *   name: Venue
 *   description: Venue management
 */

/**
 * @swagger
 * /api/venue:
 *   post:
 *     summary: Create a new venue
 *     tags: [Venue]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               schema:
 *                 type: string
 *               regionId:
 *                 type: number
 *               districkId:
 *                 type: number
 *     responses:
 *       201:
 *         description: Venue created
 *       500:
 *         description: Server error
 */
routerVenue.post("/venue", venueController.createVenue);

/**
 * @swagger
 * /api/venue:
 *   get:
 *     summary: Get a list of all venue
 *     tags: [Venue]
 *     responses:
 *       200:
 *         description: A list of venue
 *       500:
 *         description: Server error
 */
routerVenue.get("/venue", venueController.getVenue);

/**
 * @swagger
 * /api/venue/{id}:
 *   get:
 *     summary: Get a venue by ID
 *     tags: [Venue]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The venue ID
 *     responses:
 *       200:
 *         description: Venue details
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 */
routerVenue.get("/venue/:id", venueController.getByIDVenue);

/**
 * @swagger
 * /api/venue/{id}:
 *   put:
 *     summary: Update a venue by ID
 *     tags: [Venue]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The venue ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               schema:
 *                 type: string
 *               regionId:
 *                 type: number
 *               districkId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Venue updated
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 */
routerVenue.put("/venue/:id", venueController.updateVenue);

/**
 * @swagger
 * /api/venue/{id}:
 *   delete:
 *     summary: Delete a venue by ID
 *     tags: [Venue]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The venue ID
 *     responses:
 *       200:
 *         description: Venue deleted
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 */
routerVenue.delete("/venue/:id", venueController.deleteVenue);

module.exports = routerVenue;