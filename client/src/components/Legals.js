import React from "react";
import { Link } from "react-router-dom";

export default function Legals({ name }) {
	return (
		<li className="py-2">
			<Link to="/legals">{name}</Link>
		</li>
	);
}
