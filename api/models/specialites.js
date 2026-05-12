const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Specialite = sequelize.define('Specialite', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id_specialite'
    },
    nom: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    id_categorie: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'specialite',
    timestamps: false
});

module.exports = Specialite;