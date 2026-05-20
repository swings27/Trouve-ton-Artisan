import React, { useState, useEffect } from "react";
import ArtisanCard from "../components/ArtisanCard";
import SearchBar from "../components/SearchBar";
import Etape from "../components/Etape";
import Step1 from "../assets/images/telephone-intelligent.png";
import Step2 from "../assets/images/la-diversite.png";
import Step3 from "../assets/images/formulaire-de-contact.png";
import Step4 from "../assets/images/chronometre.png";

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
		<main>
			<SearchBar />
			<div>
				<section className="">
					<h2>Comment trouver mon artisan ?</h2>
					<Etape
						image={Step1}
						number="1"
						description="Choisir la catégorie d'artisanat dans le menu"
					/>
					<Etape image={Step2} number="2" description="Choisir un artisan" />
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
				</section>
				<section>
					<h2>Artisan du mois</h2>
					<div>
						{loading && <p>Chargement ...</p>}

						{!loading && error && <p>Erreur de chargement.</p>}

						{!loading &&
							!error &&
							artisans.map((artisan) => (
								<ArtisanCard
									key={artisan.id}
									id={artisan.id}
									nom={artisan.nom}
									specialite={artisan.specialite}
									ville={artisan.ville}
									note={artisan.note}
								/>
							))}
					</div>
				</section>
			</div>
		</main>
	);
}
