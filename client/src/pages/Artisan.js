import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormArtisan from "../components/Form";
import StarsNote from "../components/StarsNote";

export default function Artisan() {
	const [artisan, setArtisan] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/artisans/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setArtisan(data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
			});
	}, [id]);
	
    return (
        <>
            {loading && <p>Chargement ...</p>}

		    {!loading && error && <p>Erreur de chargement.</p>}

		    {!loading && !error && artisan && (
                <div>
			        <section className="">
                        <h2>{artisan.nom}</h2>
                        <h3>{artisan.Specialite.nom}</h3>
                        <h4>{artisan.site_web}</h4>
                        <img src="" alt=""/>
                        <div>
                            {artisan.ville}
                            <StarsNote note={artisan.note}/>
                        </div>
                        <div>
                            <h5>A PROPOS</h5>
                            <p>{artisan.a_propos}</p>
                        </div>
			        </section>
                    <section>
                        <FormArtisan />
                    </section>
		        </div>
            )};
        </>
	)
};
