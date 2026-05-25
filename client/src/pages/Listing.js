import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArtisanCard from "../components/ArtisanCard";
import Container from "react-bootstrap/Container";

export default function Listing() {
	const { categorie } = useParams();

	const [artisans, setArtisans] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/categories`)
			.then((res) => res.json())
			.then((categories) => {
				const categorieMatch = categories.find(
					(cat) => cat.nom.toLowerCase() === categorie.toLowerCase(),
				);

				if (!categorieMatch) {
					setError("Catégorie introuvable");
					setLoading(false);
					return;
				}
				return fetch(
					`${process.env.REACT_APP_API_URL}/categories/${categorieMatch.id}/artisans`,
				);
			})
			.then((res) => res.json())
			.then((data) => {
				setArtisans(data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
			});
	}, [categorie]);

	return (
		<Container fluid="lg" className="listing">
			<div className="mt-5 px-5 py-3">
				<hr className="top-title" />
				<h1>{categorie}</h1>
			</div>
			<div className="mt-5 m-3 px-5">
				<div className="px-5 d-sm-flex flex-column align-items-center flex-md-row flex-wrap justify-content-start gap-5">
					{loading && <p>Chargement ...</p>}

					{!loading && error && <p>Erreur de chargement.</p>}

					{!loading &&
						!error &&
						artisans.map((artisan) => (
							<ArtisanCard
								key={artisan.id}
								id={artisan.id}
								nom={artisan.nom}
								specialite={artisan.Specialite.nom}
								ville={artisan.ville}
								note={artisan.note}
							/>
						))}
				</div>
			</div>
		</Container>
	);
}
