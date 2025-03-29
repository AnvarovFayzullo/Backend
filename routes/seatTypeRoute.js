const express = require("express");
const routerSeatType = express.Router();
const seatTypeController = require("../controller/seatType.controller");

/**
 * @swagger
 * tags:
 *   name: SeatType
 *   description: SeatType management
 */

/**
 * @swagger
 * /api/seatType:
 *   post:
 *     summary: Create a new seatType
 *     tags: [SeatType]
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
 *         description: SeatType created
 *       500:
 *         description: Server error
 */
routerSeatType.post("/seatType", seatTypeController.createSeatType);

/**
 * @swagger
 * /api/seatType:
 *   get:
 *     summary: Get a list of all seatType
 *     tags: [SeatType]
 *     responses:
 *       200:
 *         description: A list of seatType
 *       500:
 *         description: Server error
 */
routerSeatType.get("/seatType", seatTypeController.getSeatType);

/**
 * @swagger
 * /api/seatType/{id}:
 *   get:
 *     summary: Get a seatType by ID
 *     tags: [SeatType]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The seatType ID
 *     responses:
 *       200:
 *         description: SeatType details
 *       404:
 *         description: SeatType not found
 *       500:
 *         description: Server error
 */
routerSeatType.get("/seatType/:id", seatTypeController.getByIDSeatType);

/**
 * @swagger
 * /api/seatType/{id}:
 *   put:
 *     summary: Update a seatType by ID
 *     tags: [SeatType]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The seatType ID
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
 *         description: SeatType updated
 *       404:
 *         description: SeatType not found
 *       500:
 *         description: Server error
 */
routerSeatType.put("/seatType/:id", seatTypeController.updateSeatType);

/**
 * @swagger
 * /api/seatType/{id}:
 *   delete:
 *     summary: Delete a seatType by ID
 *     tags: [SeatType]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The seatType ID
 *     responses:
 *       200:
 *         description: SeatType deleted
 *       404:
 *         description: SeatType not found
 *       500:
 *         description: Server error
 */
routerSeatType.delete("/seatType/:id", seatTypeController.deleteSeatType);

module.exports = routerSeatType;