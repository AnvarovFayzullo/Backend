const express = require("express");
const routerAdmin = express.Router();
const adminController = require("../controller/admin.controller");

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin management
 */

/**
 * @swagger
 * /api/admin:
 *   post:
 *     summary: Create a new admin
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               is_active:
 *                 type: string
 *               is_creator:
 *                 type: string
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       201:
 *         description: Admin created
 *       500:
 *         description: Server error
 */
routerAdmin.post("/admin", adminController.createAdmin);

/**
 * @swagger
 * /api/admin:
 *   get:
 *     summary: Get a list of all admin
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: A list of admin
 *       500:
 *         description: Server error
 */
routerAdmin.get("/admin", adminController.getAdmin);

/**
 * @swagger
 * /api/admin/{id}:
 *   get:
 *     summary: Get a admin by ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The admin ID
 *     responses:
 *       200:
 *         description: Admin details
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
routerAdmin.get("/admin/:id", adminController.getByIDAdmin);

/**
 * @swagger
 * /api/admin/{id}:
 *   put:
 *     summary: Update a admin by ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The admin ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               is_active:
 *                 type: string
 *               is_creator:
 *                 type: string
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Admin updated
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
routerAdmin.put("/admin/:id", adminController.updateAdmin);

/**
 * @swagger
 * /api/admin/{id}:
 *   delete:
 *     summary: Delete a admin by ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The admin ID
 *     responses:
 *       200:
 *         description: Admin deleted
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
routerAdmin.delete("/admin/:id", adminController.deleteAdmin);

module.exports = routerAdmin;