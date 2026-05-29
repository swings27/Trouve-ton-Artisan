const swaggerJsdoc = require("swagger-jsdoc");

const servers = process.env.NODE_ENV === "production"
  ? [{ url: process.env.API_URL, description: "Serveur de production" }]
  : [{ url: "http://localhost:3001", description: "Serveur de développement" }];

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Trouve ton Artisan — API",
			version: "1.0.0",
			description: "API REST de la plateforme artisans Auvergne-Rhône-Alpes",
		},
		servers,
	},

	apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
