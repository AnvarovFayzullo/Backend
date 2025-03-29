const express = require("express");
const routerLang = express.Router();
const langController = require("../controller/lang.controller");

/**
 * @swagger
 * tags:
 *   name: Lang
 *   description: Lang management
 */

/**
 * @swagger
 * /api/lang:
 *   post:
 *     summary: Create a new lang
 *     tags: [Lang]
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
 *         description: Lang created
 *       500:
 *         description: Server error
 */
routerLang.post("/lang", langController.createLang);

/**
 * @swagger
 * /api/lang:
 *   get:
 *     summary: Get a list of all lang
 *     tags: [Lang]
 *     responses:
 *       200:
 *         description: A list of lang
 *       500:
 *         description: Server error
 */
routerLang.get("/lang", langController.getLang);

/**
 * @swagger
 * /api/lang/{id}:
 *   get:
 *     summary: Get a lang by ID
 *     tags: [Lang]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The lang ID
 *     responses:
 *       200:
 *         description: Lang details
 *       404:
 *         description: Lang not found
 *       500:
 *         description: Server error
 */
routerLang.get("/lang/:id", langController.getByIDLang);

/**
 * @swagger
 * /api/lang/{id}:
 *   put:
 *     summary: Update a lang by ID
 *     tags: [Lang]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The lang ID
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
 *         description: Lang updated
 *       404:
 *         description: Lang not found
 *       500:
 *         description: Server error
 */
routerLang.put("/lang/:id", langController.updateLang);

/**
 * @swagger
 * /api/lang/{id}:
 *   delete:
 *     summary: Delete a lang by ID
 *     tags: [Lang]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The lang ID
 *     responses:
 *       200:
 *         description: Lang deleted
 *       404:
 *         description: Lang not found
 *       500:
 *         description: Server error
 */
routerLang.delete("/lang/:id", langController.deleteLang);

module.exports = routerLang;