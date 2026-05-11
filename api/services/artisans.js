const Artisan = require("../models/artisans");
const Specialite = require("../models/specialites");

exports.getById = async (req, res, next) => {
	try {
		const selectedArtisan = await Artisan.findByPk(req.params.id, {
			include: [{ model: Specialite }],
		});

		if (!selectedArtisan) {
			return res.status(404).json({ message: "Artisan non trouvé" });
		}

		return res.status(200).json(selectedArtisan);
	} catch (error) {
		console.error("Erreur de récupération de l'artisan", error);
		return res
			.status(500)
			.json({ message: "Erreur serveur", error: error.message });
	}
};

exports.getTopArtisan = async (req, res, next) => {
	try {
		const topArtisans = await Artisan.findAll({
			where: { top: true },
			limit: 3,
			include: [{ model: Specialite }],
		});
		return res.status(200).json(topArtisans);
	} catch (error) {
		console.error("Erreur de récupération des artisans", error);
		return res
			.status(500)
			.json({ message: "Erreur serveur", error: error.message });
	}
};

exports.getSearchedArtisan = async (req, res, next) => {
	try {
		const searchedArtisan = await Artisan.findAll({
			where: { nom: { [Op.like]: `%${req.query.nom}%` } },
            include: [{ model: Specialite }]
		});

		if (!searchedArtisan.length) {
			return res.status(404).json({ message: "Artisan non trouvé" });
		}

		return res.status(200).json(searchedArtisan);
	} catch (error) {
		console.error("Erreur de récupération de l'artisan", error);
		return res
			.status(500)
			.json({ message: "Erreur serveur", error: error.message });
	}
};
