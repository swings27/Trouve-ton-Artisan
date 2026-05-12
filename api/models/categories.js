const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categorie = sequelize.define('Categorie', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id_categorie'
    },
    nom: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    }   
}, {
    tableName: 'categorie',
    timestamps: false
});

module.exports = Categorie;