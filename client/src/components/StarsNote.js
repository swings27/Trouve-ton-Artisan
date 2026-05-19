import React from "react";

export default function StarsNote({ note }) {

    const stars = Array.from({ length: 5 });
    const fullStar = Math.floor(note);
    const halfStar = note % 1 >= 0.5;

    return (
        <div aria-label={`Note : ${note} sur 5`}>
            {stars.map((_, index) => {
                if (index < fullStar) {
                    return <i key={index} className="bi bi-star-fill"></i>
                }

                if (index === fullStar && halfStar) {
                    return <i key={index} className="bi bi-star-half"></i>
                }

                return <i key={index} className="bi bi-star"></i>
            })}
        </div>
    )
}