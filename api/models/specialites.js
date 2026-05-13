/**
 * @module Specialite
 * @description Model Sequelize représentant la table specialite.
 * Chaque spécialité est rattachée à une seule catégorie.
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * @typedef {Object} Specialite
 * @property {number} id           - Identifiant unique (clé primaire)
 * @property {string} nom          - Nom de la spécialité (unique)
 * @property {number} id_categorie - Clé étrangère vers la catégorie
 */
const Specialite = sequelize.define('Specialite', {
    /** 
     * @property {number} id - Clé primaire (mappe vers id_specialite en BDD) 
     */
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id_specialite'
    },
    /** 
     * @property {string} nom - Nom de la spécialité (unique, 50 car. max) 
     */
    nom: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    /** 
     * @property {number} id_categorie - Clé étrangère vers la table categorie 
     */
    id_categorie: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'specialite',
    timestamps: false
});

module.exports = Specialite;