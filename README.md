# Trouve ton artisan !
 
Plateforme régionale de mise en relation entre particuliers et artisans d'Auvergne-Rhône-Alpes.
 
---
 
## Technologies
 
| Couche | Stack |
|---|---|
| Front-end | React 19, React-Bootstrap 2.10, Bootstrap 5, Sass |
| API | Node.js 24 (LTS), Express 4, Sequelize 6.37.8 |
| Base de données | MySQL / MariaDB |
| Versionning | Git / GitHub |
 
---
 
## Prérequis
 
- [Node.js 24 LTS](https://nodejs.org/) installé
- [Laragon](https://laragon.org/) installé et démarré (fournit MySQL)
- Git installé
---
 
## Structure du dépôt
 
```
trouve-ton-artisan/
├── api/          # Serveur Express + Sequelize
├── client/       # Application React
└── database/     # Scripts SQL
    ├── create.sql    # Création du schéma
    └── seed.sql      # Alimentation avec les données de test
```
 
---
 
## Installation
 
### 1. Cloner le dépôt
 
```bash
git clone https://github.com/swings27/Trouve-ton-Artisan.git
cd trouve-ton-artisan
```
 
### 2. Base de données
 
Démarrer Laragon, puis dans le terminal MySQL ou via HeidiSQL :
 
```sql
source database/create.sql
source database/seed.sql
```
 
### 3. Installer et configurer l'API
 
```bash
cd api
npm install
```
 
Créer un fichier `.env` à la racine du dossier `api/` en s'appuyant sur `.env.example` :
 
```bash
cp .env.example .env
```
 
Remplir les variables dans `.env` :
 
```
DB_HOST=localhost
DB_USER=
DB_PASSWORD=
DB_NAME=trouve_ton_artisan
DB_PORT=3306
PORT=3001
NODE_ENV=development
API_URL=http://localhost:3001
```
 
### 4. Installer et configurer le client
 
```bash
cd ../client
npm install
```
 
Créer un fichier `.env` à la racine du dossier `client/` :
 
```bash
cp .env.example .env
```
 
Remplir les variables dans `.env` :
 
```
REACT_APP_API_URL=http://localhost:3001
```
 
---
 
## Lancement en local
 
Ouvrir **deux terminaux** :
 
**Terminal 1 — API**
```bash
cd api
npm start
```
L'API est accessible sur `http://localhost:3001`
La documentation Swagger est accessible sur `http://localhost:3001/api-docs`
 
**Terminal 2 — Client**
```bash
cd client
npm start
```
Le site est accessible sur `http://localhost:3000`
 
---
 
## Site en ligne
 
🌐 [Trouve ton artisan !](https://trouve-ton-artisan-phi-six.vercel.app/)
📡 [API](trouve-ton-artisan-production-ae0d.up.railway.app)
📖 [Documentation Swagger](trouve-ton-artisan-production-ae0d.up.railway.app/docs)
