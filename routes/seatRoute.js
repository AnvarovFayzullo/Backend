const express = require("express");
const routerCart = express.Router();
const seatController = require("../controller/seat.controller");

/**
 * @swagger
 * tags:
 *   name: Seat
 *   description: Seat management
 */

/**
 * @swagger
 * /api/seat:
 *   post:
 *     summary: Create a new seat
 *     tags: [Seat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector:
 *                 type: number
 *               row_number:
 *                 type: number
 *               number:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               seat_type_id:
 *                 type: number
 *               location_in_schema:
 *                 type: string
 *     responses:
 *       201:
 *         description: Seat created
 *       500:
 *         description: Server error
 */
routerCart.post("/seat", seatController.createSeat);

/**
 * @swagger
 * /api/seat:
 *   get:
 *     summary: Get a list of all seat
 *     tags: [Seat]
 *     responses:
 *       200:
 *         description: A list of seat
 *       500:
 *         description: Server error
 */
routerCart.get("/seat", seatController.getSeat);

/**
 * @swagger
 * /api/seat/{id}:
 *   get:
 *     summary: Get a seat by ID
 *     tags: [Seat]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The seat ID
 *     responses:
 *       200:
 *         description: Seat details
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
routerCart.get("/seat/:id", seatController.getByIDSeat);

/**
 * @swagger
 * /api/seat/{id}:
 *   put:
 *     summary: Update a seat by ID
 *     tags: [Seat]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The seat ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector:
 *                 type: number
 *               row_number:
 *                 type: number
 *               number:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               seat_type_id:
 *                 type: number
 *               location_in_schema:
 *                 type: string
 *     responses:
 *       200:
 *         description: Seat updated
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
routerCart.put("/seat/:id", seatController.updateSeat);

/**
 * @swagger
 * /api/seat/{id}:
 *   delete:
 *     summary: Delete a seat by ID
 *     tags: [Seat]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The seat ID
 *     responses:
 *       200:
 *         description: Seat deleted
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
routerCart.delete("/seat/:id", seatController.deleteSeat);

module.exports = routerCart;