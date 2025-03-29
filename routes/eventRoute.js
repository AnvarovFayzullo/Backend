const express = require("express");
const routerEvent = express.Router();
const eventController = require("../controller/event.controller");

/**
 * @swagger
 * tags:
 *   name: Event
 *   description: Event management
 */

/**
 * @swagger
 * /api/event:
 *   post:
 *     summary: Create a new event
 *     tags: [Event]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *               start_date:
 *                 type: date
 *               start_time:
 *                 type: string
 *               finish_date:
 *                 type: date
 *               finish_time:
 *                 type: string
 *               info:
 *                 type: string
 *               event_type_id:
 *                 type: number
 *               human_category_id:
 *                 type: number
 *               lang_id:
 *                 type: number
 *               release_date:
 *                 type: string
 *               venue_id:
 *                 type: number
 *     responses:
 *       201:
 *         description: Event created
 *       500:
 *         description: Server error
 */
routerEvent.post("/event", eventController.createEvent);

/**
 * @swagger
 * /api/event:
 *   get:
 *     summary: Get a list of all event
 *     tags: [Event]
 *     responses:
 *       200:
 *         description: A list of event
 *       500:
 *         description: Server error
 */
routerEvent.get("/event", eventController.getEvent);

/**
 * @swagger
 * /api/event/{id}:
 *   get:
 *     summary: Get a event by ID
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The event ID
 *     responses:
 *       200:
 *         description: Event details
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
routerEvent.get("/event/:id", eventController.getByIDEvent);

/**
 * @swagger
 * /api/event/{id}:
 *   put:
 *     summary: Update a event by ID
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The event ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *               start_date:
 *                 type: date
 *               start_time:
 *                 type: string
 *               finish_date:
 *                 type: date
 *               finish_time:
 *                 type: string
 *               info:
 *                 type: string
 *               event_type_id:
 *                 type: number
 *               human_category_id:
 *                 type: number
 *               lang_id:
 *                 type: number
 *               release_date:
 *                 type: string
 *               venue_id:
 *                 type: number
 *     responses:
 *       200:
 *         description: Event updated
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
routerEvent.put("/event/:id", eventController.updateEvent);

/**
 * @swagger
 * /api/event/{id}:
 *   delete:
 *     summary: Delete a event by ID
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The event ID
 *     responses:
 *       200:
 *         description: Event deleted
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
routerEvent.delete("/event/:id", eventController.deleteEvent);

module.exports = routerEvent;