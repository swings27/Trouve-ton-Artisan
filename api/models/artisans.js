const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * @module Artisan
 * @description Model Sequelize représentant la table artisan
 */
const Artisan = sequelize.define('Artisan', {
    /**
     * @property {number} id - Clé primaire (mappe vers la colonne id_artisan en BDD)
     */
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id_artisan'
    },
    /**
     * @property {string} nom - Nom de l'artisan ou de l'entreprise
     */
    nom: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true,
        validate: { isEmail: true }
    },
    ville: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    note: {
        type: DataTypes.DECIMAL(2,1),
        allowNull: false,
        validate: {
            isNumeric: true,
            min: 0,
            max: 5
        }
    },
    site_web: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: { isUrl: true }
    },
    a_propos: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    top: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    id_specialite: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'artisan',
    timestamps: false
});

module.exports = Artisan;