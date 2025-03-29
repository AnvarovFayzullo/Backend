const express = require("express");
const routerDistrick = express.Router();
const districkController = require("../controller/distrinct.controller");

/**
 * @swagger
 * tags:
 *   name: Districk
 *   description: Districk management
 */

/**
 * @swagger
 * /api/districk:
 *   post:
 *     summary: Create a new districk
 *     tags: [Districk]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               regionId:
 *                 type: number
 *     responses:
 *       201:
 *         description: Districk created
 *       500:
 *         description: Server error
 */
routerDistrick.post("/districk", districkController.createDistrict);

/**
 * @swagger
 * /api/districk:
 *   get:
 *     summary: Get a list of all districk
 *     tags: [Districk]
 *     responses:
 *       200:
 *         description: A list of districk
 *       500:
 *         description: Server error
 */
routerDistrick.get("/districk", districkController.getDistrict);

/**
 * @swagger
 * /api/districk/{id}:
 *   get:
 *     summary: Get a districk by ID
 *     tags: [Districk]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The districk ID
 *     responses:
 *       200:
 *         description: Districk details
 *       404:
 *         description: Districk not found
 *       500:
 *         description: Server error
 */
routerDistrick.get("/districk/:id", districkController.getByIDDistrict);

/**
 * @swagger
 * /api/districk/{id}:
 *   put:
 *     summary: Update a districk by ID
 *     tags: [Districk]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The districk ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               regionId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Districk updated
 *       404:
 *         description: Districk not found
 *       500:
 *         description: Server error
 */
routerDistrick.put("/districk/:id", districkController.updateDistrict);

/**
 * @swagger
 * /api/districk/{id}:
 *   delete:
 *     summary: Delete a districk by ID
 *     tags: [Districk]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The districk ID
 *     responses:
 *       200:
 *         description: Districk deleted
 *       404:
 *         description: Districk not found
 *       500:
 *         description: Server error
 */
routerDistrick.delete("/districk/:id", districkController.deleteDistrict);

module.exports = routerDistrick;