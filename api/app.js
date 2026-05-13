require('dotenv').config();

const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');

const rateLimit = require('express-rate-limit');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const sequelize = require('./config/database');

const indexRouter = require('./routes/index');

require('./models/associations');
const app = express();

app.disable('x-powered-by');
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET'],
    optionsSuccessStatus: 200
}));
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    message: {
        'Trop de requêtes depuis cette adresse, réessayez dans 15 minutes.'
    }
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
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
