/**
 * @module artisansRouter
 * @description Routes de l'API pour les artisans.
 * Préfixe : /artisans — branché dans index.js
 */

const express = require("express");
const router = express.Router();
const { body, param, query } = require('express-validator');
const validate = require("../middlewares/validate");
const service = require("../services/artisans");

/**
 * @swagger
 * tags:
 *   name: Artisans
 *   description: Gestion et consultation des artisans
 */

/**
 * @swagger
 * /artisans/top:
 *   get:
 *     summary: Récupère les trois artisans mis en avant
 *     tags: [Artisans]
 *     responses:
 *       200:
 *         description: Liste des artisans du mois
 *       500:
 *         description: Erreur serveur
 */
router.get("/top", service.getTopArtisan);

/**
 * @swagger
 * /artisans/search:
 *   get:
 *     summary: Recherche des artisans par nom
 *     tags: [Artisans]
 *     parameters:
 *       - in: query
 *         name: nom
 *         required: true
 *         schema:
 *           type: string
 *         description: Terme de recherche (partiel)
 *     responses:
 *       200:
 *         description: Liste des artisans correspondants
 *       400:
 *         description: Paramètre nom manquant ou invalide
 *       404:
 *         description: Aucun artisan trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get(
	"/search",
	query("nom")
		.notEmpty()
		.withMessage("Le paramètre nom est requis")
		.trim()
		.escape(),
	validate,
	service.getSearchedArtisan,
);

/**
 * @swagger
 * /artisans/{id}:
 *   get:
 *     summary: Récupère la fiche complète d'un artisan
 *     tags: [Artisans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identifiant de l'artisan
 *     responses:
 *       200:
 *         description: Fiche complète de l'artisan
 *       400:
 *         description: Identifiant invalide
 *       404:
 *         description: Artisan non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get(
	"/:id",
	param("id").isInt({ min: 1 }).withMessage("Id doit être un entier positif"),
	validate,
	service.getById,
);

/**
 * @swagger
 * /artisans/{id}/contact:
 *   post:
 *     summary: Envoie un email à l'artisan via le formulaire de contact
 *     tags: [Artisans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identifiant de l'artisan
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nom, email, objet, message]
 *             properties:
 *               nom:
 *                 type: string
 *               email:
 *                 type: string
 *               objet:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Email envoyé avec succès
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Artisan non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.post('/:id/contact',
    param('id')
        .isInt({ min: 1 })
        .withMessage('L\'id doit être un entier positif'),
    body('nom')
        .trim().escape()
        .isLength({ min: 5 })
        .withMessage('Le nom doit contenir au moins 5 caractères'),
    body('email')
        .isEmail().withMessage('Email expéditeur invalide')
        .normalizeEmail(),
    body('objet')
        .trim().escape()
        .isLength({ min: 5 })
        .withMessage('L\'objet doit contenir au moins 5 caractères'),
    body('message')
        .trim().escape()
        .isLength({ min: 20 })
        .withMessage('Le message doit contenir au moins 20 caractères'),
    validate,
    service.contactArtisan
);

module.exports = router;
