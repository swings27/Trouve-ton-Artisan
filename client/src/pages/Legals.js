import React from "react";
import image from "../assets/images/construction.png";
import Container from "react-bootstrap/Container";
import useSEO from "../hooks/useSEO";

export default function Legals() {
	useSEO({
		title: "Trouve ton artisan ! | Pages légales",
		description: "Ces pages sont en cours de construction."
	});

	return (
		<Container fluid="lg" className="mt-5">
			<div className="d-flex flex-column align-items-center gap-4">
				<img src={image} alt="" aria-hidden="true" className="img-fluid" />
				<h1 className="text-center">Cette page est en construction.</h1>
			</div>
		</Container>
	);
}
