const express = require("express");
const router = express.Router();

const validate = require("../middlewares/validate");
const service = require("../services/artisans");

router.get("/top", service.getTopArtisan);

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

router.get(
	"/:id",
	param("id").isInt({ min: 1 }).withMessage("Id doit être un entier positif"),
	validate,
	service.getById,
);

module.exports = router;
