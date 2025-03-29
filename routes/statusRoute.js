const express = require("express");
const routerStatus = express.Router();
const statusController = require("../controller/status.controller");

/**
 * @swagger
 * tags:
 *   name: Status
 *   description: Status management
 */

/**
 * @swagger
 * /api/status:
 *   post:
 *     summary: Create a new status
 *     tags: [Status]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Status created
 *       500:
 *         description: Server error
 */
routerStatus.post("/status", statusController.createStatus);

/**
 * @swagger
 * /api/status:
 *   get:
 *     summary: Get a list of all status
 *     tags: [Status]
 *     responses:
 *       200:
 *         description: A list of status
 *       500:
 *         description: Server error
 */
routerStatus.get("/status", statusController.getStatus);

/**
 * @swagger
 * /api/status/{id}:
 *   get:
 *     summary: Get a status by ID
 *     tags: [Status]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The status ID
 *     responses:
 *       200:
 *         description: Status details
 *       404:
 *         description: Status not found
 *       500:
 *         description: Server error
 */
routerStatus.get("/status/:id", statusController.getByIDStatus);

/**
 * @swagger
 * /api/status/{id}:
 *   put:
 *     summary: Update a status by ID
 *     tags: [Status]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The status ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Status updated
 *       404:
 *         description: Status not found
 *       500:
 *         description: Server error
 */
routerStatus.put("/status/:id", statusController.updateStatus);

/**
 * @swagger
 * /api/status/{id}:
 *   delete:
 *     summary: Delete a status by ID
 *     tags: [Status]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The status ID
 *     responses:
 *       200:
 *         description: Status deleted
 *       404:
 *         description: Status not found
 *       500:
 *         description: Server error
 */
routerStatus.delete("/status/:id", statusController.deleteStatus);

module.exports = routerStatus;