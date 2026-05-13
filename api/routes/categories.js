const express = require("express");
const router = express.Router();

const validate = require("../middlewares/validate");
const service = require("../services/categories");

router.get("/", service.getAll);

router.get(
	"/:id/artisans",
	param("id").isInt({ min: 1 }).withMessage("Id doit être un entier positif"),
	validate,
	service.getByCategorie,
);

module.exports = router;
