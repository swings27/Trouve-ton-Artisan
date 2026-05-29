import React from "react";
import image from "../assets/images/erreur-404.png";
import Container from "react-bootstrap/Container";
import useSEO from "../hooks/useSEO";

export default function NotFound() {
	useSEO({
		title: "Page non trouvée | Trouve ton artisan !",
		description: 'La page que vous recherchez n\'existe pas.'
	});
	
	return (
		<Container fluid="lg" className="mt-5">
			<div className="d-flex flex-column align-items-center gap-4">
				<img src={image} alt="" aria-hidden="true" className="img-fluid" />
				<h1>Page non trouvée.</h1>
			</div>
		</Container>
	);
}
