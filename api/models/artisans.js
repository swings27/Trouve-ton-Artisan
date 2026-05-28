/**
 * @module Artisan
 * @description Model Sequelize représentant la table artisan.
 * Contient les informations de chaque artisan référencé sur la plateforme.
 */

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

/**
 * @typedef {Object} Artisan
 * @property {number}  id        - Identifiant unique (clé primaire)
 * @property {string}  nom       - Nom de l'artisan ou de l'entreprise
 * @property {string}  email     - Adresse email (unique, format valide requis)
 * @property {string}  ville     - Ville de l'artisan
 * @property {number}  note      - Note de 0 à 5
 * @property {string}  site_web  - Site web (optionnel, URL valide requise)
 * @property {string}  a_propos  - Description de l'artisan
 * @property {boolean} top       - Mis en avant sur la page d'accueil (défaut : false)
 * @property {number}  id_specialite - Clé étrangère vers la spécialité
 */
const Artisan = sequelize.define(
	"Artisan",
	{
		/**
		 * @property {number} id - Clé primaire (mappe vers la colonne id_artisan en BDD)
		 */
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			field: "id_artisan",
		},
		/**
		 * @property {string} nom - Nom de l'artisan ou de l'entreprise (50car. max)
		 */
		nom: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		/**
		 * @property {string} email - Email unique, format validé avant insertion
		 */
		email: {
			type: DataTypes.STRING(150),
			allowNull: false,
			unique: true,
			validate: { isEmail: true },
		},
		/**
		 * @property {string} ville - Ville de l'artisan (50 car.max)
		 */
		ville: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		/**
		 * @property {number} note - Note de 0 à 5, une décimale
		 */
		note: {
			type: DataTypes.DECIMAL(2, 1),
			allowNull: false,
			validate: {
				isNumeric: true,
				min: 0,
				max: 5,
			},
		},
		/**
		 * @property {string} site_web - URL du site web (optionnel)
		 */
		site_web: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: { isUrl: true },
		},
		/**
		 * @property {string} a_propos - Présentation de l'artisan (500 car. max)
		 */
		a_propos: {
			type: DataTypes.STRING(500),
			allowNull: false,
		},
		/**
		 * @property {boolean} top - Artisan mis en avant sur la page d'accueil (défaut: false)
		 */
		top: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		/**
		 * @property {number} id_specialite - Clé étrangère vers la table spécialité
		 */
		id_specialite: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		tableName: "artisan",
		timestamps: false,
	},
);

module.exports = Artisan;
