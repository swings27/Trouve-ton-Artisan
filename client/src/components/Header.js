import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import SearchBar from "./SearchBar";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


export default function Header() {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [searchOpen, setSearchOpen] = useState(false);

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
		<Navbar data-bs-theme="light" expand="lg" className="header p-0">
			<Container fluid="lg">
				<div className="d-flex align-items-center w-100">
					<Navbar.Brand href="/" className="flex-grow-1">
						<img
							src={logo}
							alt="Trouve ton artisan ! - Accueil"
							className="logo"
						/>
					</Navbar.Brand>
					<Button
						className="d-lg-none me-2"
						aria-controls="search-collapse"
						onClick={() => setSearchOpen(!searchOpen)}
						aria-expanded={searchOpen}
					>
						<i className="bi bi-search" aria-hidden="true"></i>
					</Button>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
				</div>
				<div className="d-flex flex-lg-column align-items-end gap-3 flex-md-row">
					<Navbar.Collapse in={searchOpen} id="search-collapse">
						<SearchBar />
					</Navbar.Collapse>
					<Navbar.Collapse
						id="basic-navbar-nav"
						className="justify-content-end"
					>
						<Nav className="mx-3">
							{loading && <Nav.Link disabled>Chargement...</Nav.Link>}

							{!loading && error && (
								<Nav.Link disabled>Erreur de chargement.</Nav.Link>
							)}

							{!loading &&
								!error &&
								categories.map((categorie) => (
									<Nav.Link
										as={NavLink}
										key={categorie.id}
										to={`/${categorie.nom}/artisans`}
									>
										{categorie.nom}
									</Nav.Link>
								))}
						</Nav>
					</Navbar.Collapse>
				</div>
			</Container>
		</Navbar>
	);
}
