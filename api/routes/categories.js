const express = require('express');
const router = express.Router();

const service = require('../services/categories');

router.get('/', service.getAll);

router.get('/:id/artisans', service.getByCategorie);

modules.export = router;