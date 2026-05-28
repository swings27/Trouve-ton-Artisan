import React from "react";

export default function StarsNote({ note }) {
	const stars = Array.from({ length: 5 });
	const fullStar = Math.floor(note);
	const halfStar = note % 1 >= 0.5;

	return (
		<div role="img" aria-label={`Note : ${note} sur 5`}>
			{stars.map((_, index) => {
				if (index < fullStar) {
					return <i key={index} className="bi bi-star-fill ps-1"></i>;
				}

				if (index === fullStar && halfStar) {
					return <i key={index} className="bi bi-star-half ps-1"></i>;
				}

				return <i key={index} className="bi bi-star ps-1"></i>;
			})}
		</div>
	);
}
