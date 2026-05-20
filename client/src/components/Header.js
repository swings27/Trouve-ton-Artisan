import React, { useState, useEffect } from "react";
import logo from "../assets/images/Logo.png";
import SearchBar from "./SearchBar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/categories`)
			.then((res) => res.json())
			.then((data) => {
				setCategories(data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
			});
	}, []);

	return (
		<Navbar data-bs-theme="light" expand="lg" className="header">
			<Container>
				<Navbar.Brand href="/" className="me-auto p-2">
					<img src={logo} alt="Trouve ton artisan ! - Accueil" className="logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Form className="d-flex">
						<SearchBar />
					</Form>
					<Nav className="ms-auto">
						{loading && <Nav.Link disabled>Chargement...</Nav.Link>}

						{!loading && error && (
							<Nav.Link disabled>Erreur de chargement.</Nav.Link>
						)}

						{!loading &&
							!error &&
							categories.map((categorie) => (
								<Nav.Link
									key={categorie.id}
									href={`/${categorie.nom}/artisans`}
								>
									{categorie.nom}
								</Nav.Link>
							))}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
