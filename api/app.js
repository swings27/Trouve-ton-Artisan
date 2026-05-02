require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var swaggerJSDoc = require('swagger-jsdoc');

/*
Configuration of Swagger
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
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const swaggerUi = require('swagger-ui-express');

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

module.exports = app;
