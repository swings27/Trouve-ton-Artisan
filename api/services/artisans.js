/**
 * @module artisanService
 * @description Services de gestion des artisans.
 * Chaque fonction correspond à une requête Sequelize utilisée par les routes artisans.
 */

const { Op } = require("sequelize");
const nodemailer = require('nodemailer');
const Artisan = require("../models/artisans");
const Specialite = require("../models/specialites");

/**
 * Récupère un artisan par son identifiant avec sa spécialité.
 * @async
 * @param {Object}   req            - Requête Express
 * @param {Object}   req.params     - Paramètres de la route
 * @param {number}   req.params.id  - Identifiant de l'artisan
 * @param {Object}   res            - Réponse Express
 * @param {Function} next           - Middleware suivant
 * @returns {Promise<Object>} L'artisan correspondant avec sa spécialité
 * @throws {404} Si aucun artisan ne correspond à l'identifiant
 * @throws {500} En cas d'erreur serveur
 */
exports.getById = async (req, res, next) => {
	try {
		const selectedArtisan = await Artisan.findByPk(req.params.id, {
			include: [{ model: Specialite, attributes: ['nom'] }],
		});

		if (!selectedArtisan) {
			return res.status(404).json({ message: "Artisan non trouvé" });
		}

		return res.status(200).json(selectedArtisan);
	} catch (error) {
		console.error("Erreur de récupération de l'artisan :", error);
		return res
			.status(500)
			.json({ message: "Erreur serveur", error: error.message });
	}
};

/**
 * Récupère les trois artisans mis en avant (top = true).
 * @async
 * @param {Object}   req  - Requête Express
 * @param {Object}   res  - Réponse Express
 * @param {Function} next - Middleware suivant
 * @returns {Promise<Array>} Liste des artisans du mois (max 3)
 * @throws {500} En cas d'erreur serveur
 */
exports.getTopArtisan = async (req, res, next) => {
	try {
		const topArtisans = await Artisan.findAll({
			where: { top: true },
			limit: 3,
			include: [{ model: Specialite }],
		});
		return res.status(200).json(topArtisans);
	} catch (error) {
		console.error("Erreur de récupération des artisans du mois :", error);
		return res
			.status(500)
			.json({ message: "Erreur serveur", error: error.message });
	}
};

/**
 * Recherche des artisans par nom (recherche partielle).
 * @async
 * @param {Object}   req           - Requête Express
 * @param {Object}   req.query     - Paramètres de la query string
 * @param {string}   req.query.nom - Terme de recherche (partiel, insensible à la casse)
 * @param {Object}   res           - Réponse Express
 * @param {Function} next          - Middleware suivant
 * @returns {Promise<Array>} Liste des artisans dont le nom contient le terme recherché
 * @throws {404} Si aucun artisan ne correspond
 * @throws {500} En cas d'erreur serveur
 */
exports.getSearchedArtisan = async (req, res, next) => {
	try {
		const searchedArtisan = await Artisan.findAll({
			where: { nom: { [Op.like]: `%${req.query.nom}%` } },
			include: [{ model: Specialite }],
		});

		if (!searchedArtisan.length) {
			return res.status(404).json({ message: "Artisan non trouvé" });
		}

		return res.status(200).json(searchedArtisan);
	} catch (error) {
		console.error("Erreur de récupération de l'artisan :", error);
		return res
			.status(500)
			.json({ message: "Erreur serveur", error: error.message });
	}
};

exports.contactArtisan = async (req, res, next) => {
	try {
		const wantedArtisan = await Artisan.findByPk(req.params.id);

		if(!wantedArtisan) {
			return res.status(404).json({ message: "Artisan non trouvé" });
		}

		const testAccount = await nodemailer.createTestAccount();

		const transporter = nodemailer.createTransport({
			host: 'smtp.ethereal.email',
			port: 587,
			secure: false,
			auth: {
				user: process.env.ETHEREAL_USER,
				pass: process.env.ETHEREAL_PASS
			}
		});

		const info = await transporter.sendMail({
			from: '"Trouve ton Artisan" <noreply@trouve-ton-artisan.fr>',
			to: wantedArtisan.email,
			replyTo: req.body.email,
			subject: req.body.objet,
			text: `Message de ${req.body.nom} (${req.body.email}):\n\n${req.body.message}`
		});

		console.log('Email consultable ici :', nodemailer.getTestMessageUrl(info));

		return res.status(200).json({ message: 'Email envoyé avec succès.' });

	} catch(error) {
		console.error("Erreur de l'envoi de l'email :", error);
		return res
			.status(500)
			.json({ message: "Erreur serveur", error: error.message });
	}
}