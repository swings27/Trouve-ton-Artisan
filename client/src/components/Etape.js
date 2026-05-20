import React from "react";

export default function Etape({ image, number, description }) {
	return (
		<div>
			<img src={image} alt="" aria-hidden="true" className="step-picture" />
			<h5>Etape - {number}</h5>
			<p>{description}</p>
		</div>
	);
}