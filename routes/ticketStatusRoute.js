const express = require("express");
const routerTicketStatus = express.Router();
const ticketStatusController = require("../controller/ticketStatus.controller");

/**
 * @swagger
 * tags:
 *   name: TicketStatus
 *   description: TicketStatus management
 */

/**
 * @swagger
 * /api/ticketStatus:
 *   post:
 *     summary: Create a new ticketStatus
 *     tags: [TicketStatus]
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
 *         description: TicketStatus created
 *       500:
 *         description: Server error
 */
routerTicketStatus.post("/ticketStatus", ticketStatusController.createTicketS);

/**
 * @swagger
 * /api/ticketStatus:
 *   get:
 *     summary: Get a list of all ticketStatus
 *     tags: [TicketStatus]
 *     responses:
 *       200:
 *         description: A list of ticketStatus
 *       500:
 *         description: Server error
 */
routerTicketStatus.get("/ticketStatus", ticketStatusController.getTicketS);

/**
 * @swagger
 * /api/ticketStatus/{id}:
 *   get:
 *     summary: Get a ticketStatus by ID
 *     tags: [TicketStatus]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ticketStatus ID
 *     responses:
 *       200:
 *         description: TicketStatus details
 *       404:
 *         description: TicketStatus not found
 *       500:
 *         description: Server error
 */
routerTicketStatus.get("/ticketStatus/:id", ticketStatusController.getByIDTicketS);

/**
 * @swagger
 * /api/ticketStatus/{id}:
 *   put:
 *     summary: Update a ticketStatus by ID
 *     tags: [TicketStatus]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ticketStatus ID
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
 *         description: TicketStatus updated
 *       404:
 *         description: TicketStatus not found
 *       500:
 *         description: Server error
 */
routerTicketStatus.put("/ticketStatus/:id", ticketStatusController.updateTicketS);

/**
 * @swagger
 * /api/ticketStatus/{id}:
 *   delete:
 *     summary: Delete a ticketStatus by ID
 *     tags: [TicketStatus]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ticketStatus ID
 *     responses:
 *       200:
 *         description: TicketStatus deleted
 *       404:
 *         description: TicketStatus not found
 *       500:
 *         description: Server error
 */
routerTicketStatus.delete("/ticketStatus/:id", ticketStatusController.deleteTicketS);

module.exports = routerTicketStatus;