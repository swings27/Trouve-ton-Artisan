import React from "react";
import image from "../assets/images/construction.png";
import Container from "react-bootstrap/Container";

export default function Legals() {
	return (
		<Container fluid="lg" className="mt-5">
			<div className="d-flex flex-column align-items-center gap-4">
				<img src={image} alt="" aria-hidden="true" className="img-fluid" />
				<h1 className="text-center">Cette page est en construction.</h1>
			</div>
		</Container>
	);
}
