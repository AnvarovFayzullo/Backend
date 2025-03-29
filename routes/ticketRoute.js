const express = require("express");
const routerTicket = express.Router();
const ticketController = require("../controller/ticket.controller");

/**
 * @swagger
 * tags:
 *   name: Ticket
 *   description: Ticket management
 */

/**
 * @swagger
 * /api/ticket:
 *   post:
 *     summary: Create a new ticket
 *     tags: [Ticket]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: number
 *               seat_id:
 *                 type: number
 *               price:
 *                 type: number
 *               service_fee:
 *                 type: number
 *               status_id:
 *                 type: number
 *               ticket_type:
 *                 type: string
 *     responses:
 *       201:
 *         description: Ticket created
 *       500:
 *         description: Server error
 */
routerTicket.post("/ticket", ticketController.createTicket);

/**
 * @swagger
 * /api/ticket:
 *   get:
 *     summary: Get a list of all ticket
 *     tags: [Ticket]
 *     responses:
 *       200:
 *         description: A list of ticket
 *       500:
 *         description: Server error
 */
routerTicket.get("/ticket", ticketController.getTicket);

/**
 * @swagger
 * /api/ticket/{id}:
 *   get:
 *     summary: Get a ticket by ID
 *     tags: [Ticket]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ticket ID
 *     responses:
 *       200:
 *         description: Ticket details
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
routerTicket.get("/ticket/:id", ticketController.getByIDTicket);

/**
 * @swagger
 * /api/ticket/{id}:
 *   put:
 *     summary: Update a ticket by ID
 *     tags: [Ticket]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ticket ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: number
 *               seat_id:
 *                 type: number
 *               price:
 *                 type: number
 *               service_fee:
 *                 type: number
 *               status_id:
 *                 type: number
 *               ticket_type:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ticket updated
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
routerTicket.put("/ticket/:id", ticketController.updateTicket);

/**
 * @swagger
 * /api/ticket/{id}:
 *   delete:
 *     summary: Delete a ticket by ID
 *     tags: [Ticket]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ticket ID
 *     responses:
 *       200:
 *         description: Ticket deleted
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
routerTicket.delete("/ticket/:id", ticketController.deleteTicket);

module.exports = routerTicket;