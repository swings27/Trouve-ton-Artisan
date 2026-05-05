const sequelize = require('../config/database');
const Categorie = require('./categories');
const Specialite = require('./specialites');
const Artisan = require('./artisans');

/**
 * Associations correspondant aux foreign keys du script SQL
 */

// Une catégorie a plusieurs spécialités
Categorie.hasMany(Specialite, {
    foreignKey: 'id_categorie'
});

// Une spécialité appartient à une seule catégorie
Specialite.belongsTo(Categorie, {
    foreignKey: 'id_categorie'
});

// Une spécialité a plusieurs artisans
Specialite.hasMany(Artisan, {
    foreignKey: 'id_specialite'
});

// Un artisan appartient à une seule spécialité
Artisan.belongsTo(Specialite, {
    foreignKey: 'id_specialite'
});

module.exports = { sequelize, Categorie, Specialite, Artisan };