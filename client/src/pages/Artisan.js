import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormArtisan from "../components/Form";
import StarsNote from "../components/StarsNote";
import { Col, Container, Row } from "react-bootstrap";
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
				<div className="mt-5 mx-5">
					<section className="d-flex flex-row justify-content-between align-items-end">
						<div>
							<hr className="top-title" />
							<h2>{artisan.nom}</h2>
							<h3>{artisan.Specialite.nom}</h3>
						</div>
						<h4>{artisan.site_web}</h4>
					</section>
					<section className="mx-3 mt-5">
						<Row>
							<Col xs={12} md={5}>
								<img
									src={picdefault}
									alt="Menuisier travaillant le bois"
									className="defaultpic img-fluid"
								/>
								<div className="artisan-bar d-flex flex-row justify-content-around align-items-center my-4 p-1 rounded-pill">
									{artisan.ville}
									<StarsNote note={artisan.note} />
								</div>
								<div className="mx-3 p-2 border-start">
									<h5>A PROPOS</h5>
									<p>{artisan.a_propos}</p>
								</div>
							</Col>
							<Col xs={12} md={{span: 5, offset: 2}} className="form-section">
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
