const express = require('express');
const router = express.Router();

const categoriesRouter = require('./categories');
const artisansRouter = require('./artisans');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trouve ton Artisan !' });
});

router.use("/categories", categoriesRouter);
router.use("/artisans", artisansRouter);

module.exports = router;
