-- Création de la base
CREATE DATABASE IF NOT EXISTS trouve_ton_artisan
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Création de l'utilisateur admin
CREATE USER IF NOT EXISTS 'admin'@'localhost' IDENTIFIED BY 'P@ssword_Art!san27';
GRANT ALL PRIVILEGES ON trouve_ton_artisan.* TO 'admin'@'localhost';
FLUSH PRIVILEGES;

USE trouve_ton_artisan;

-- Création des tables
CREATE TABLE categorie (
    id_categorie INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    CONSTRAINT pk_categorie PRIMARY KEY (id_categorie),
    CONSTRAINT uq_nom_categorie UNIQUE (nom)
);

CREATE TABLE specialite (
    id_specialite INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    id_categorie INT NOT NULL,
    CONSTRAINT pk_specialite PRIMARY KEY (id_specialite),
    CONSTRAINT uq_nom_specialite UNIQUE (nom),
    CONSTRAINT fk_rattache_categorie FOREIGN KEY (id_categorie) REFERENCES categorie(id_categorie)
    ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE artisan (
    id_artisan INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    email VARCHAR(150) NOT NULL,
    ville VARCHAR(50) NOT NULL,
    note DECIMAL(2,1) NOT NULL,
    site_web VARCHAR(255) NULL,
    a_propos VARCHAR(500) NOT NULL,
    top BOOLEAN DEFAULT FALSE,
    id_specialite INT NOT NULL,
    CONSTRAINT pk_artisan PRIMARY KEY (id_artisan),
    CONSTRAINT uq_email UNIQUE (email),
    CONSTRAINT chk_note CHECK (note >= 0 AND note <= 5),
    CONSTRAINT fk_appartient_specialite FOREIGN KEY (id_specialite) REFERENCES specialite(id_specialite)
    ON UPDATE CASCADE ON DELETE RESTRICT
);