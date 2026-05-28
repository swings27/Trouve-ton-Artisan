import React from "react";
import Col from "react-bootstrap/Col";

export default function Etape({ image, number, description }) {
	return (
		<Col xl={3} md={6} sm={12} className="mx-auto p-3 mb-3 text-center">
			<img src={image} alt="" aria-hidden="true" className="step-picture mx-auto" />
			<div className="step-text my-3">
				<h2>Etape - {number}</h2>
				<p className="fs-6">{description}</p>
			</div>
		</Col>
	);
}
