const express = require("express");
const routerHC = express.Router();
const humanCategoryController = require("../controller/humanCategory.controller");

/**
 * @swagger
 * tags:
 *   name: HumanCategory
 *   description: HumanCategory management
 */

/**
 * @swagger
 * /api/humanCategory:
 *   post:
 *     summary: Create a new humanCategory
 *     tags: [HumanCategory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               stage_age:
 *                 type: string
 *               finish_age:
 *                 type: string
 *               gender:
 *                 type: string
 *     responses:
 *       201:
 *         description: HumanCategory created
 *       500:
 *         description: Server error
 */
routerHC.post("/humanCategory", humanCategoryController.createHumanCategory);

/**
 * @swagger
 * /api/humanCategory:
 *   get:
 *     summary: Get a list of all humanCategory
 *     tags: [HumanCategory]
 *     responses:
 *       200:
 *         description: A list of humanCategory
 *       500:
 *         description: Server error
 */
routerHC.get("/humanCategory", humanCategoryController.getHumanCategory);

/**
 * @swagger
 * /api/humanCategory/{id}:
 *   get:
 *     summary: Get a humanCategory by ID
 *     tags: [HumanCategory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The humanCategory ID
 *     responses:
 *       200:
 *         description: HumanCategory details
 *       404:
 *         description: HumanCategory not found
 *       500:
 *         description: Server error
 */
routerHC.get("/humanCategory/:id", humanCategoryController.getByIDHumanCategory);

/**
 * @swagger
 * /api/humanCategory/{id}:
 *   put:
 *     summary: Update a humanCategory by ID
 *     tags: [HumanCategory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The humanCategory ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               stage_age:
 *                 type: string
 *               finish_age:
 *                 type: string
 *               gender:
 *                 type: string
 *     responses:
 *       200:
 *         description: HumanCategory updated
 *       404:
 *         description: HumanCategory not found
 *       500:
 *         description: Server error
 */
routerHC.put("/humanCategory/:id", humanCategoryController.updateHumanCategory);

/**
 * @swagger
 * /api/humanCategory/{id}:
 *   delete:
 *     summary: Delete a humanCategory by ID
 *     tags: [HumanCategory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The humanCategory ID
 *     responses:
 *       200:
 *         description: HumanCategory deleted
 *       404:
 *         description: HumanCategory not found
 *       500:
 *         description: Server error
 */
routerHC.delete("/humanCategory/:id", humanCategoryController.deleteHumanCategory);

module.exports = routerHC;