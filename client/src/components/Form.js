import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function FormArtisan({ emailArtisan }) {
	const [formData, setFormData] = useState({
		nom: "",
		email: "",
		objet: "",
		message: ""
	});

	const [errors, setErrors] = useState({});
	const [success, setSuccess] = useState(false);
	const [sending, setSending] = useState(false);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const validate = () => {
		const newErrors = {};
		const { nom, email, objet, message } = formData;

		if (!nom.trim() || nom.trim().length < 5)
			newErrors.nom = "Votre nom doit contenir au moins 5 caractères.";

		if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
			newErrors.email = "L'email n'est pas valide.";

		if (!objet.trim() || objet.trim().length < 5)
			newErrors.objet = "L'objet doit contenir au moins 5 caractères.";

		if (!message.trim() || message.trim().length < 20)
			newErrors.message = "Le message doit contenir au moins 20 caractères.";

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
		console.log("Envoi vers :", emailArtisan, formData);
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
