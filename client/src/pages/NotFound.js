import React from 'react';
import image from "../assets/images/erreur-404.png";
import Container from 'react-bootstrap/Container';

export default function NotFound() {
    return (
            <Container fluid="lg">
            <img src={image} alt="" aria-hidden="true" />
            <h1>Page non trouvée.</h1>
            </Container>
    )
};