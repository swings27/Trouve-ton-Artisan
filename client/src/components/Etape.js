import React from "react";

export default function Etape({ image, number, description }) {
	return (
		<div className="mx-auto p-3 mb-3 text-center">
			<img src={image} alt="" aria-hidden="true" className="step-picture mx-auto" />
			<div className="my-3">
				<h5>Etape - {number}</h5>
				<p>{description}</p>
			</div>
		</div>
	);
}
