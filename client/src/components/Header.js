import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import SearchBar from "./SearchBar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [searchOpen, setSearchOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	const handleSearchOpen = () => {
		setSearchOpen(!searchOpen);
		setMenuOpen(false);
	};

	const handleMenuOpen = () => {
		setMenuOpen(!menuOpen);
		setSearchOpen(false);
	};

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
						className="d-lg-none me-2 search-toggle"
						onClick={handleSearchOpen}
						aria-expanded={searchOpen}
						aria-controls="search-collapse"
						aria-label="Ouvrir la recherche"
					>
						<i className="bi bi-search" aria-hidden="true"></i>
					</Button>
					<button
						className="d-lg-none navbar-toggler burger-btn"
						onClick={handleMenuOpen}
						aria-expanded={menuOpen}
						aria-controls="basic-navbar-nav"
						aria-label="Ouvrir le menu"
					>
						<i className="bi bi-list"></i>
						<p>Menu</p>
					</button>
				</div>
				<div className="d-flex flex-lg-column align-items-end flex-md-row w-100">
					<Navbar.Collapse
						in={searchOpen}
						id="search-collapse"
						className="my-3 header-search"
					>
						<SearchBar />
					</Navbar.Collapse>
					<Navbar.Collapse in={menuOpen} id="basic-navbar-nav" className="my-4">
						<Nav className="mx-3 gap-2">
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
