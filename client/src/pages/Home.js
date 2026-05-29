import React, { useState, useEffect } from "react";
import ArtisanCard from "../components/ArtisanCard";
import Etape from "../components/Etape";
import Step1 from "../assets/images/telephone-intelligent.png";
import Step2 from "../assets/images/la-diversite.png";
import Step3 from "../assets/images/formulaire-de-contact.png";
import Step4 from "../assets/images/chronometre.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
	const [artisans, setArtisans] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/artisans/top`)
			.then((res) => res.json())
			.then((data) => {
				setArtisans(data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
			});
	}, []);

	return (
		<>
			<Container fluid="lg" className="px-0">
				<section className="find-person py-5 pt-5">
					<div className="step-title py-3 px-5 mt-5">
						<hr className="top-title" />
						<h1 className="title-text">Comment trouver mon artisan ?</h1>
					</div>
					<Container className="p-2 my-4">
						<Row>
							<Etape
								image={Step1}
								number="1"
								description="Choisir la catégorie d'artisanat dans le menu"
							/>
							<Etape
								image={Step2}
								number="2"
								description="Choisir un artisan"
							/>
							<Etape
								image={Step3}
								number="3"
								description="Le contacter via le formulaire de contact"
							/>
							<Etape
								image={Step4}
								number="4"
								description="Une réponse sera apportée sous 48h"
							/>
						</Row>
					</Container>
				</section>
				<section className="top-person py-5 px-3">
					<hr className="top-title" />
					<h2>Artisans du mois</h2>
					<div>
						{loading && <p>Chargement ...</p>}

						{!loading && error && <p>Erreur de chargement.</p>}

						{!loading && !error && (
							<>
								<div className="d-sm-none py-5 px-1">
									<Carousel
										aria-label="Les 3 artisans du mois"
										indicators={true}
										controls={true}
										interval={null}
										className="pb-4"
									>
										{artisans.map((artisan) => (
											<Carousel.Item key={artisan.id} className="pb-5">
												<div className="d-flex justify-content-center">
													<ArtisanCard
														id={artisan.id}
														nom={artisan.nom}
														specialite={artisan.Specialite.nom}
														ville={artisan.ville}
														note={artisan.note}
													/>
												</div>
											</Carousel.Item>
										))}
									</Carousel>
								</div>
								<div className="d-none d-sm-flex flex-column align-items-center flex-lg-row justify-content-evenly gap-5 py-5">
									{artisans.map((artisan) => (
										<ArtisanCard
											key={artisan.id}
											id={artisan.id}
											nom={artisan.nom}
											specialite={artisan.Specialite.nom}
											ville={artisan.ville}
											note={artisan.note}
											headingLevel="h3"
										/>
									))}
								</div>
							</>
						)}
					</div>
				</section>
			</Container>
		</>
	);
}
