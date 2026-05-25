import React from "react";
import Col from "react-bootstrap/esm/Col";

export default function Etape({ image, number, description }) {
	return (
		<Col xl={3} md={6} sm={12} className="mx-auto p-3 mb-3 text-center">
			<img src={image} alt="" aria-hidden="true" className="step-picture mx-auto" />
			<div className="step-text my-3">
				<h4>Etape - {number}</h4>
				<p>{description}</p>
			</div>
		</Col>
	);
}
