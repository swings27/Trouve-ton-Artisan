import React from "react";
import { Link } from "react-router-dom";
import StarsNote from "./StarsNote";

export default function ArtisanCard({ id, nom, note, specialite, ville }) {
	return (
		<article className="artisan-card p-3 rounded-4 d-flex flex-column align-items-end gap-2">
			<StarsNote note={note} />
			<div className="align-self-start mt-2">
				<p className="fw-bold fs-5 text-uppercase">{nom}</p>
				<p>
					{specialite} - {ville}
				</p>
			</div>
			<Link
				to={`/artisans/${id}`}
				className="btn-card px-3 py-2 rounded-pill w-50 text-center"
				role="button"
				aria-label={`Voir la fiche artisan de ${nom}`}
			>
				Voir la fiche
			</Link>
		</article>
	);
}
