/**
 * @module associations
 * @description Déclare toutes les associations entre les models Sequelize.
 * Ce fichier doit être importé une seule fois dans app.js au démarrage.
 * Il n'exporte rien — son simple import suffit à enregistrer les relations.
 */

const sequelize = require('../config/database');
const Categorie = require('./categories');
const Specialite = require('./specialites');
const Artisan = require('./artisans');

/**
 * Une catégorie a plusieurs spécialités.
 * Sens inverse de Specialite.belongsTo(Categorie).
 */
Categorie.hasMany(Specialite, {
    foreignKey: 'id_categorie'
});

/**
 * Une spécialité appartient à une catégorie.
 * La clé étrangère id_categorie est dans la table specialite.
 */
Specialite.belongsTo(Categorie, {
    foreignKey: 'id_categorie'
});

/**
 * Une spécialité a plusieurs artisans.
 * Sens inverse de Artisan.belongsTo(Specialite).
 */
Specialite.hasMany(Artisan, {
    foreignKey: 'id_specialite'
});

/**
 * Un artisan appartient à une spécialité.
 * La clé étrangère id_specialite est dans la table artisan.
 */
Artisan.belongsTo(Specialite, {
    foreignKey: 'id_specialite'
});

module.exports = { sequelize, Categorie, Specialite, Artisan };