import React from "react";
import image from "../assets/images/erreur-404.png";
import Container from "react-bootstrap/Container";

export default function NotFound() {
	return (
		<Container fluid="lg" className="mt-5">
			<div className="d-flex flex-column align-items-center gap-4">
				<img src={image} alt="" aria-hidden="true" className="img-fluid" />
				<h1>Page non trouvée.</h1>
			</div>
		</Container>
	);
}
