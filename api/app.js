require('dotenv').config();
require('./models/associations');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var swaggerJSDoc = require('swagger-jsdoc');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const sequelize = require('./config/database');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', indexRouter);

/*
* Test de la connexion à la base de données
*/
sequelize.authenticate()
    .then(() => console.log('Connexion à la base de donnée réussie.'))
    .catch(err => console.error('Connexion impossible :', err));

module.exports = sequelize;
module.exports = app;
