/**
 * @module indexRouter
 * @description Router principal de l'API.
 * Point d'entrée de toutes les routes — branché sur '/' dans app.js.
 * Délègue les requêtes aux routers spécialisés selon le préfixe d'URL.
 */

const express = require("express");
const router = express.Router();

/** Router des routes /categories */
const categoriesRouter = require("./categories");
/** Router des routes /artisans */
const artisansRouter = require("./artisans");

/**
 * @swagger
 * /:
 *   get:
 *     summary: Route racine — vérifie que l'API est en ligne
 *     tags: [Index]
 *     responses:
 *       200:
 *         description: API opérationnelle
 */
router.get("/", function (req, res, next) {
	res.json({ message: "API Trouve ton Artisan" });
});

/** Délègue toutes les routes /categories au router dédié */
router.use("/categories", categoriesRouter);
/** Délègue toutes les routes /artisans au router dédié */
router.use("/artisans", artisansRouter);

module.exports = router;
