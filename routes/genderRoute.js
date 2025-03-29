const express = require("express");
const routerGender = express.Router();
const genderController = require("../controller/gender.controller");

/**
 * @swagger
 * tags:
 *   name: Gender
 *   description: Gender management
 */

/**
 * @swagger
 * /api/gender:
 *   post:
 *     summary: Create a new gender
 *     tags: [Gender]
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
 *         description: Gender created
 *       500:
 *         description: Server error
 */
routerGender.post("/gender", genderController.createGender);

/**
 * @swagger
 * /api/gender:
 *   get:
 *     summary: Get a list of all gender
 *     tags: [Gender]
 *     responses:
 *       200:
 *         description: A list of gender
 *       500:
 *         description: Server error
 */
routerGender.get("/gender", genderController.getGender);

/**
 * @swagger
 * /api/gender/{id}:
 *   get:
 *     summary: Get a gender by ID
 *     tags: [Gender]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The gender ID
 *     responses:
 *       200:
 *         description: Gender details
 *       404:
 *         description: Gender not found
 *       500:
 *         description: Server error
 */
routerGender.get("/gender/:id", genderController.getByIDGender);

/**
 * @swagger
 * /api/gender/{id}:
 *   put:
 *     summary: Update a gender by ID
 *     tags: [Gender]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The gender ID
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
 *         description: Gender updated
 *       404:
 *         description: Gender not found
 *       500:
 *         description: Server error
 */
routerGender.put("/gender/:id", genderController.updateGender);

/**
 * @swagger
 * /api/gender/{id}:
 *   delete:
 *     summary: Delete a gender by ID
 *     tags: [Gender]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The gender ID
 *     responses:
 *       200:
 *         description: Gender deleted
 *       404:
 *         description: Gender not found
 *       500:
 *         description: Server error
 */
routerGender.delete("/gender/:id", genderController.deleteGender);

module.exports = routerGender;