import React from 'react';
import { Link } from 'react-router-dom';

export const CardsItem = ({imageUrl, name}) => {
    return (
        <Link to={`/card/${name}`} className="cardsItem">
            <img src={imageUrl} alt="Music Card" />
        </Link>
    )
}
