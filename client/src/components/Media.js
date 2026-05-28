import React from "react";

export default function Media({ icon, href = "#", label }) {
	return (
		<li className="list-inline-item">
			<a href={href} aria-label={label}>
				<i className={icon}></i>
			</a>
		</li>
	);
}
