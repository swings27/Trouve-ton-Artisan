import React from "react";
import { Link } from "react-router-dom";
import StarsNote from "./StarsNote";

export default function ArtisanCard({ id, nom, note, specialite, ville }) {
	return (
		<article>
			<StarsNote note={note} />
			<div>
                <p>{nom}</p>
                <p>{specialite} - {ville}</p>
            </div>
			<div>
				<Link to={`/artisans/${id}`}>Voir la fiche</Link>
			</div>
		</article>
	);
}
