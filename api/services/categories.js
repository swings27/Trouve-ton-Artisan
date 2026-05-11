const Categorie = require('../models/categories');
const Specialite = require('../models/specialites');
const Artisan = require('../models/artisans');

// Récupération de toutes les catégories par nom
exports.getAll = async (req, res, next) => {
    try {
        const categories = await Categorie.findAll({
            attributes: ['nom']
        });
        return res.status(200).json(categories)
    } catch (error) {
        console.error("Erreur de récupération des catégories", error);
        return res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
};

// Récupération des artisans par catégorie
exports.getByCategorie = async (req, res, next) => {
    try {
        const selectedArtisans = await Artisan.findAll({
            include: [{ model: Specialite,
                include: [{ model: Categorie }] 
            }],
            where: { '$Specialite.id_categorie$': req.params.id }
        });
        return res.status(200).json(selectedArtisans)
    } catch (error) {
        console.error("Erreur de récupération des artisans par catégorie", error);
        return res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
};