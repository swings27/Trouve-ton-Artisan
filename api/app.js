/**
 * @module app
 * @description Configuration principale de l'API Trouve ton Artisan.
 * Déclare les middlewares de sécurité, les middlewares Express et les routes.
 * Exporté vers bin/www qui démarre le serveur HTTP.
 */
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const sequelize = require('./config/database');
const indexRouter = require('./routes/index');

/** 
 * Activation des associations Sequelize entre les models 
 */
require('./models/associations');

const app = express();

// Sécurité
/** Masque l'en-tête X-Powered-By pour ne pas exposer Express */
app.disable('x-powered-by');
/** Helmet — configure automatiquement les en-têtes HTTP de sécurité */
app.use(helmet());
/** CORS — restreint les appels à l'origine frontend déclarée dans .env */
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET'],
    optionsSuccessStatus: 200
}));
/** Rate limiting — 100 requêtes max par IP sur 15 minutes */
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    message: { message: 'Trop de requêtes depuis cette adresse, réessayez dans 15 minutes.'}
}));

// Middlewares standard
/** Logger des requêtes HTTP en mode développement */
app.use(logger('dev'));
/** Parse le corps des requêtes en JSON */
app.use(express.json());
/** Parse les données de formulaire encodées en URL */
app.use(express.urlencoded({ extended: false }));
/** 
 * Parse les cookies des requêtes entrantes.
 * Conservé en cas d'ajout futur d'une authentification.
 */
app.use(cookieParser());

// Documentation
/** Swagger UI — interface de documentation de l'API accessible sur /docs */
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
/** Routes principales — préfixe / (contient /artisans et /categories) */
app.use('/', indexRouter);

// Connexion à la base de données
/**
 * Teste la connexion à la base de données au démarrage du serveur.
 * Un message de confirmation ou d'erreur s'affiche dans le terminal.
 */
sequelize.authenticate()
    .then(() => console.log('Connexion à la base de donnée réussie.'))
    .catch(err => console.error('Connexion impossible :', err));

module.exports = app;
