/**
 * @module Categorie
 * @description Model Sequelize représentant la table categorie.
 * Une catégorie regroupe plusieurs spécialités.
 */

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

/**
 * @typedef {Object} Categorie
 * @property {number} id  - Identifiant unique (clé primaire)
 * @property {string} nom - Nom de la catégorie (unique)
 */
const Categorie = sequelize.define(
	"Categorie",
	{
		/**
		 * @property {number} id - Clé primaire (mappe vers id_categorie en BDD)
		 */
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			field: "id_categorie",
		},
		/**
		 * @property {string} nom - Nom de la catégorie (unique, 50 car. max)
		 */
		nom: {
			type: DataTypes.STRING(50),
			allowNull: false,
			unique: true,
		},
	},
	{
		tableName: "categorie",
		timestamps: false,
	},
);

module.exports = Categorie;
