import React from 'react';
import image from "../assets/images/erreur-404.png"

export default function NotFound() {
    return (
        <>
            <img src={image} alt="" aria-hidden="true" />
            <h1>Page non trouvée.</h1>
        </>
    )
};