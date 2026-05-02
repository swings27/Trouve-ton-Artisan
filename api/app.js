require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

/*
Configuration de Swagger
*/
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Trouve ton Artisan !',
    version: '1.0.0',
  },
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const sequelize = require('./db/database');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', indexRouter);
app.use('/users', usersRouter);

/*
* Test de la connexion à la base de données
*/
sequelize.authenticate()
    .then(() => console.log('Connexion à la base de donnée réussie.'))
    .catch(err => console.error('Connexion impossible :', err));

module.exports = sequelize;
module.exports = app;
