import React from "react";
import logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
	const Media = ({ icon, href = "#", label }) => (
		<li className="list-inline-item">
			<a href={href} aria-label={label}>
				<i className={icon}></i>
			</a>
		</li>
	);

	const Legals = ({ name }) => (
		<li>
			<Link to="/legals">{name}</Link>
		</li>
	);

	return (
		<div className="footer">
			<div className="info-block p-3">
				<div>
					<img src={logo} alt="Trouve ton artisan ! - Logo" className="logo" />
					<p>Conseil régonal</p>
					<p>Auvergne Rhône-Alpes</p>
				</div>
				<div>
					<h4>Lyon</h4>
					<ul className="list-unstyled">
						<li>101 Cours Charlemagne</li>
						<li>CS20033</li>
						<li>69269 LYON CEDEX 02</li>
						<li>France</li>
						<li>Ouvert du lundi au vendredi de 8h 15 à 17h</li>
						<li>
							<a href="tel:+33426734000" className="icon-link text-decoration-none">
								<i className="bi bi-telephone" aria-hidden="true"></i>
								+33 (0)4 26 73 40 00
							</a>
						</li>
						<li>Accueil téléphonique du lundi au vendredi de 8h 30 à 17h</li>
						<li>
							<div className="d-flex align-items-center gap-2">
								<i className="bi bi-train-front" aria-hidden="true"></i>
								<span>Trams T1 et T2 — Arrêt Hotel de Région - Montrochet</span>
							</div>
						</li>
					</ul>
				</div>
				<div>
					<ul className="d-lg-flex flex-wrap justify-content-center gap-3 list-unstyled my-2">
						<Legals name="Mentions légales" />
						<Legals name="Données personnelles" />
						<Legals name="Accessibilité : partiellement conforme" />
						<Legals name="Presse" />
						<Legals name="Marchés publics" />
						<Legals name="Venir à la Région" />
						<Legals name="Contacts" />
						<Legals name="Politique des cookies" />
						<Legals name="Gestion des cookies" />
					</ul>
				</div>
			</div>
			<div className="my-3">
				<ul className="list-inline d-flex justify-content-center align-items-center gap-2">
					<Media icon="bi bi-facebook" label="Nous suivre sur Facebook" />
					<Media icon="bi bi-linkedin" label="Nous suivre sur LinkedIn" />
					<Media icon="bi bi-youtube" label="Nous regarder sur Youtube" />
					<Media icon="bi bi-instagram" label="Nous suivre sur Instagram" />
					<Media icon="bi bi-twitter-x" label="Nous suivre sur X" />
					<Media icon="bi bi-whatsapp" label="Nous contacter sur WhatsApp" />
					<Media icon="bi bi-tiktok" label="Nous suivre sur Tik Tok" />
				</ul>
			</div>
		</div>
	);
}
