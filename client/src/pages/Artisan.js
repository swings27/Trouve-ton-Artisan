import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormArtisan from "../components/Form";
import StarsNote from "../components/StarsNote";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import picdefault from "../assets/images/menuiserie.jpg";

export default function Artisan() {
	const [artisan, setArtisan] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/artisans/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setArtisan(data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
			});
	}, [id]);

	return (
		<Container fluid="lg">
			{loading && <p>Chargement ...</p>}

			{!loading && error && <p>Erreur de chargement.</p>}

			{!loading && !error && artisan && (
				<div className="mt-5 mx-0 mx-md-5">
					<section className="artisan-header d-sm-flex flex column d-md-flex flex-row justify-content-between align-items-end">
						<div>
							<hr className="top-title" />
							<h1>{artisan.nom}</h1>
							<h2>- {artisan.Specialite.nom}</h2>
						</div>
						<a href={artisan.site_web}>Site web de {artisan.nom}</a>
					</section>
					<section className="mx-2 my-5">
						<Row className="gx-5">
							<Col xs={12} md={6} className="artisan-infos mt-3 mb-5">
								<img
									src={picdefault}
									alt="Menuisier travaillant le bois"
									className="defaultpic img-fluid"
								/>
								<div className="artisan-bar d-flex flex-row justify-content-around align-items-center my-4 p-1 rounded-pill">
									<div className="fw-bold fs-5">{artisan.ville}</div>
									<StarsNote note={artisan.note} />
								</div>
								<div className="mx-3 p-2 h-25 border-start">
									<h3 className="h5">A PROPOS</h3>
									<p>{artisan.a_propos}</p>
								</div>
							</Col>
							<Col xs={12} md={6} className="form-section">
								<hr className="top-title contact" />
								<h3>Contacter</h3>
								<FormArtisan id={id} emailArtisan={artisan.email} />
							</Col>
						</Row>
					</section>
				</div>
			)}
		</Container>
	);
}
