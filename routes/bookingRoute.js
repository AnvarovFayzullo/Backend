const express = require("express");
const routerBook = express.Router();
const bookingController = require("../controller/booking.controller");

/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: Booking management
 */

/**
 * @swagger
 * /api/booking:
 *   post:
 *     summary: Create a new booking
 *     tags: [Booking]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: number
 *               payment_method_id:
 *                 type: number
 *               delivery_method_id:
 *                 type: number
 *               discount_coupon_id:
 *                 type: number
 *               status_id:
 *                 type: number
 *     responses:
 *       201:
 *         description: Booking created
 *       500:
 *         description: Server error
 */
routerBook.post("/booking", bookingController.createBooking);

/**
 * @swagger
 * /api/booking:
 *   get:
 *     summary: Get a list of all booking
 *     tags: [Booking]
 *     responses:
 *       200:
 *         description: A list of booking
 *       500:
 *         description: Server error
 */
routerBook.get("/booking", bookingController.getBooking);

/**
 * @swagger
 * /api/booking/{id}:
 *   get:
 *     summary: Get a booking by ID
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The booking ID
 *     responses:
 *       200:
 *         description: Booking details
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
routerBook.get("/booking/:id", bookingController.getByIDBooking);

/**
 * @swagger
 * /api/booking/{id}:
 *   put:
 *     summary: Update a booking by ID
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: number
 *               payment_method_id:
 *                 type: number
 *               delivery_method_id:
 *                 type: number
 *               discount_coupon_id:
 *                 type: number
 *               status_id:
 *                 type: number
 *     responses:
 *       200:
 *         description: Booking updated
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
routerBook.put("/booking/:id", bookingController.updateBooking);

/**
 * @swagger
 * /api/booking/{id}:
 *   delete:
 *     summary: Delete a booking by ID
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The booking ID
 *     responses:
 *       200:
 *         description: Booking deleted
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
routerBook.delete("/booking/:id", bookingController.deleteBooking);

module.exports = routerBook;