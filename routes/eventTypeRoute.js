const express = require("express");
const routerEventType = express.Router();
const eventTypeController = require("../controller/eventType.controller");

/**
 * @swagger
 * tags:
 *   name: EventType
 *   description: EventType management
 */

/**
 * @swagger
 * /api/eventType:
 *   post:
 *     summary: Create a new eventType
 *     tags: [EventType]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               parent_event_type_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: EventType created
 *       500:
 *         description: Server error
 */
routerEventType.post("/eventType", eventTypeController.createEventType);

/**
 * @swagger
 * /api/eventType:
 *   get:
 *     summary: Get a list of all eventType
 *     tags: [EventType]
 *     responses:
 *       200:
 *         description: A list of eventType
 *       500:
 *         description: Server error
 */
routerEventType.get("/eventType", eventTypeController.getEventType);

/**
 * @swagger
 * /api/eventType/{id}:
 *   get:
 *     summary: Get a eventType by ID
 *     tags: [EventType]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The eventType ID
 *     responses:
 *       200:
 *         description: EventType details
 *       404:
 *         description: EventType not found
 *       500:
 *         description: Server error
 */
routerEventType.get("/eventType/:id", eventTypeController.getByIDEventType);

/**
 * @swagger
 * /api/eventType/{id}:
 *   put:
 *     summary: Update a eventType by ID
 *     tags: [EventType]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The eventType ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               parent_event_type_id:
 *                 type: string
 *     responses:
 *       200:
 *         description: EventType updated
 *       404:
 *         description: EventType not found
 *       500:
 *         description: Server error
 */
routerEventType.put("/eventType/:id", eventTypeController.updateEventType);

/**
 * @swagger
 * /api/eventType/{id}:
 *   delete:
 *     summary: Delete a eventType by ID
 *     tags: [EventType]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The eventType ID
 *     responses:
 *       200:
 *         description: EventType deleted
 *       404:
 *         description: EventType not found
 *       500:
 *         description: Server error
 */
routerEventType.delete("/eventType/:id", eventTypeController.deleteEventType);

module.exports = routerEventType;