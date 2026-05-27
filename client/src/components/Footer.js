import React from "react";
import logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
	const Media = ({ icon, href = "#", label }) => (
		<li className="list-inline-item">
			<a href={href} aria-label={label}>
				<i className={icon}></i>
			</a>
		</li>
	);

	const Legals = ({ name }) => (
		<li className="py-2">
			<Link to="/legals">{name}</Link>
		</li>
	);

	return (
		<div className="footer">
			<Container fluid="lg" className="info-block p-3">
				<img
					src={logo}
					alt="Trouve ton artisan ! - Logo"
					className="logo footer-logo mb-4"
				/>
				<Row className="py-2">
					<Col lg={4} md={12}>
						<p>Conseil régional</p>
						<p>Auvergne Rhône-Alpes</p>
					</Col>
					<Col lg={4} md={12}>
						<p className="fw-bold">Lyon</p>
						<ul className="list-unstyled">
							<li className="py-1">101 Cours Charlemagne</li>
							<li className="py-1">CS20033</li>
							<li className="py-1">69269 LYON CEDEX 02</li>
							<li className="py-1">France</li>
						</ul>
					</Col>
					<Col lg={4} md={12}>
						<ul className="list-unstyled">
							<li className="py-1">Ouvert du lundi au vendredi de 8h 15 à 17h</li>
							<li className="py-1">
								<a
									href="tel:+33426734000"
									className="icon-link text-decoration-none"
								>
									<i className="bi bi-telephone" aria-hidden="true"></i>
									+33 (0)4 26 73 40 00
								</a>
							</li>
							<li className="py-1">Accueil téléphonique du lundi au vendredi de 8h 30 à 17h</li>
							<li className="py-1">
								<div className="d-flex align-items-center gap-2">
									<i className="bi bi-train-front" aria-hidden="true"></i>
									<span>
										Trams T1 et T2 — Arrêt Hotel de Région - Montrochet
									</span>
								</div>
							</li>
						</ul>
					</Col>
				</Row>
					<div className="border-top border-white pt-2">
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
			</Container>
			<div className="medias py-3">
				<ul className="list-inline d-flex flex-wrap justify-content-center align-items-center gap-3">
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
