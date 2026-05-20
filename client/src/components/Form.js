import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function FormArtisan({ id }) {
	const [formData, setFormData] = useState({
		nom: "",
		email: "",
		objet: "",
		message: "",
	});

	const [errors, setErrors] = useState({});
	const [success, setSuccess] = useState(false);
	const [sending, setSending] = useState(false);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});

		if (errors[e.target.name]) {
			setErrors({ ...errors, [e.target.name]: "" });
		}
	};

	const validate = () => {
		const newErrors = {};
		const { nom, email, objet, message } = formData;

		// Nom — min 5, max 100
		if (!nom.trim()) {
			newErrors.nom = "Le nom est obligatoire.";
		} else if (nom.trim().length < 5) {
			newErrors.nom = "Le nom doit contenir au moins 5 caractères.";
		} else if (nom.trim().length > 100) {
			newErrors.nom = "Le nom ne peut pas dépasser 100 caractères.";
		}

		// Email
		if (!email.trim()) {
			newErrors.email = "L'email est obligatoire.";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			newErrors.email = "L'email n'est pas valide.";
		}

		// Objet — min 5, max 100
		if (!objet.trim()) {
			newErrors.objet = "L'objet est obligatoire.";
		} else if (objet.trim().length < 5) {
			newErrors.objet = "L'objet doit contenir au moins 5 caractères.";
		} else if (objet.trim().length > 200) {
			newErrors.objet = "L'objet ne peut pas dépasser 200 caractères.";
		}

		// Message — min 20, max 2000
		if (!message.trim()) {
			newErrors.message = "Le message est obligatoire.";
		} else if (message.trim().length < 20) {
			newErrors.message = "Le message doit contenir au moins 20 caractères.";
		} else if (message.trim().length > 2000) {
			newErrors.message = "Le message ne peut pas dépasser 2000 caractères.";
		}

		return newErrors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const newErrors = validate();

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		setErrors({});
		setSending(true);
		console.log("Envoi vers :", formData);

		fetch(`${process.env.REACT_APP_API_URL}/artisans/${id}/contact`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ ...formData }),
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error("Erreur serveur");
				}
				return res.json();
			})
			.then(() => {
				setSuccess(true);
				setSending(false);
				setFormData({ nom: "", email: "", objet: "", message: "" });
			})
			.catch(() => {
				setSending(false);
				setErrors({ global: "Une erreur est survenue. Réessayez plus tard." });
			});
	};

	return (
		<Form noValidate onSubmit={handleSubmit}>
			<Row className="mb-3">
				<Form.Group as={Col} md="6" controlId="nom">
					<Form.Label>Nom</Form.Label>
					<Form.Control
						type="text"
						name="nom"
						placeholder="Nom complet"
						value={formData.nom}
						onChange={handleChange}
						isInvalid={!!errors.nom}
						aria-required="true"
					/>
					<Form.Control.Feedback type="invalid">
						{errors.nom}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group as={Col} md="6" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						name="email"
						placeholder="Email"
						value={formData.email}
						onChange={handleChange}
						isInvalid={!!errors.email}
						aria-required="true"
					/>
					<Form.Control.Feedback type="invalid">
						{errors.email}
					</Form.Control.Feedback>
				</Form.Group>
			</Row>
			<Row className="mb-3">
				<Form.Group as={Col} md="12" controlId="objet">
					<Form.Label>Objet</Form.Label>
					<Form.Control
						type="text"
						name="objet"
						placeholder="Objet"
						value={formData.objet}
						onChange={handleChange}
						isInvalid={!!errors.objet}
						aria-required="true"
					/>
					<Form.Control.Feedback type="invalid">
						{errors.objet}
					</Form.Control.Feedback>
				</Form.Group>
			</Row>
			<Row className="mb-3">
				<Form.Group as={Col} md="12" controlId="message">
					<Form.Label>Message</Form.Label>
					<Form.Control
						as="textarea"
						rows={5}
						name="message"
						value={formData.message}
						onChange={handleChange}
						isInvalid={!!errors.message}
						aria-required="true"
					/>
					<Form.Control.Feedback type="invalid">
						{errors.message}
					</Form.Control.Feedback>
				</Form.Group>
			</Row>

			<Button type="submit" disabled={sending}>
				{sending ? "Envoi en cours..." : "Envoyer le message"}
			</Button>

			{success && <p>Votre message a bien été envoyé !</p>}
		</Form>
	);
}
