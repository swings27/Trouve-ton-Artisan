/**
 * @module categoriesRouter
 * @description Routes de l'API pour les catégories.
 * Préfixe : /categories — branché dans app.js
 */

const express = require("express");
const router = express.Router();
const { param } = require('express-validator');
const validate = require("../middlewares/validate");
const service = require("../services/categories");

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Consultation des catégories d'artisanat
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Récupère toutes les catégories pour le menu
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Liste de toutes les catégories
 *       500:
 *         description: Erreur serveur
 */
router.get("/", service.getAll);

/**
 * @swagger
 * /categories/{id}/artisans:
 *   get:
 *     summary: Récupère les artisans d'une catégorie
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identifiant de la catégorie
 *     responses:
 *       200:
 *         description: Liste des artisans de la catégorie
 *       400:
 *         description: Identifiant invalide
 *       500:
 *         description: Erreur serveur
 */
router.get(
	"/:id/artisans",
	param("id").isInt({ min: 1 }).withMessage("Id doit être un entier positif"),
	validate,
	service.getByCategorie,
);

module.exports = router;
