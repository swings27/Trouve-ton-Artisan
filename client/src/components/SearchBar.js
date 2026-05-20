import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

export default function SearchBar() {
	const navigate = useNavigate();
	const [search, setSearch] = useState("");
	const [results, setResults] = useState([]);
	const [searching, setSearching] = useState(false);

	// Recherche avec debounce
	useEffect(() => {
		if (search.trim().length < 2) {
			setResults([]);
			return;
		}

		const timer = setTimeout(() => {
			setSearching(true);
			fetch(`${process.env.REACT_APP_API_URL}/artisans/search?nom=${search}`)
				.then((res) => res.json())
				.then((data) => {
					setResults(Array.isArray(data) ? data : []);
					setSearching(false);
				})
				.catch(() => {
					setResults([]);
					setSearching(false);
				});
		}, 400);

		return () => clearTimeout(timer);
	}, [search]);

	//Mise en gras
	const highlightMatch = (nom, search) => {
		const index = nom.toLowerCase().indexOf(search.toLowerCase());

		if (index === -1) return <span>{nom}</span>;

		const before = nom.slice(0, index);
		const middle = nom.slice(index, index + search.length);
		const after = nom.slice(index + search.length);

		return (
			<span>
				{before}
				<strong>{middle}</strong>
				{after}
			</span>
		);
	};

	//Cliquer sur le résultat
	const handleSelect = (artisan) => {
		setSearch("");
		setResults([]);
		navigate(`/artisans/${artisan.id}`);
	};

	return (
		<div style={{ position: "relative" }}>
			<Form.Control
				type="search"
				placeholder="Rechercher un artisan..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				aria-label="Rechercher un artisan"
				aria-expanded={results.length > 0}
				aria-autocomplete="list"
			/>
			{search.trim().length >= 2 && (
				<ul
					style={{
						position: "absolute",
						top: "100%",
						left: 0,
						right: 0,
						zIndex: 1000,
						listStyle: "none",
						padding: 0,
						margin: 0,
						background: "white",
						border: "1px solid #ccc",
						borderRadius: "4px",
					}}
				>
					{searching && <li>Recherche ...</li>}

					{!searching && results.length === 0 && <li>Aucun artisan trouvé</li>}

					{!searching &&
						results.map((artisan) => (
							<li
								key={artisan.id}
								onClick={() => handleSelect(artisan)}
								style={{ cursor: "pointer", padding: "8px 12px" }}
							>
								{highlightMatch(artisan.nom, search)}
							</li>
						))}
				</ul>
			)}
		</div>
	);
}
