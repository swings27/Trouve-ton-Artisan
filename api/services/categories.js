/**
 * @module categorieService
 * @description Services de gestion des catégories.
 * Chaque fonction correspond à une requête Sequelize utilisée par les routes catégories.
 */

const Categorie = require('../models/categories');
const Specialite = require('../models/specialites');
const Artisan = require('../models/artisans');

/**
 * Récupère toutes les catégories pour alimenter le menu de navigation.
 * @async
 * @param {Object}   req  - Requête Express
 * @param {Object}   res  - Réponse Express
 * @param {Function} next - Middleware suivant
 * @returns {Promise<Array>} Liste de toutes les catégories (id et nom)
 * @throws {500} En cas d'erreur serveur
 */
exports.getAll = async (req, res, next) => {
    try {
        const categories = await Categorie.findAll({
            attributes: ['nom']
        });
        return res.status(200).json(categories)
    } catch (error) {
        console.error("Erreur de récupération des catégories :", error);
        return res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
};

/**
 * Récupère tous les artisans appartenant à une catégorie donnée.
 * @async
 * @param {Object}   req           - Requête Express
 * @param {Object}   req.params    - Paramètres de la route
 * @param {number}   req.params.id - Identifiant de la catégorie
 * @param {Object}   res           - Réponse Express
 * @param {Function} next          - Middleware suivant
 * @returns {Promise<Array>} Liste des artisans de la catégorie avec leur spécialité
 * @throws {500} En cas d'erreur serveur
 */
exports.getByCategorie = async (req, res, next) => {
    try {
        const artisans = await Artisan.findAll({
            include: [{ model: Specialite,
                include: [{ model: Categorie }] 
            }],
            where: { '$Specialite.id_categorie$': req.params.id }
        });
        return res.status(200).json(artisans)
    } catch (error) {
        console.error("Erreur de récupération des artisans par catégorie", error);
        return res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
};