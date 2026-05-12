const express = require('express');
const router = express.Router();

const service = require('../services/artisans');

router.get('/top', service.getTopArtisan);

router.get('/search', service.getSearchedArtisan);

router.get('/:id', service.getById);

module.exports = router;
