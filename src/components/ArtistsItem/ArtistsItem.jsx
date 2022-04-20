import React from 'react'
import { Link } from 'react-router-dom';

export const ArtistsItem = ({onClick, id, avatar}) => {
    return (
        <Link to={`/artists/${id}`}>
            <div className="artistsItem" onClick={onClick}>
                <img src={avatar ? avatar : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"} alt="Artists Card" />
            </div>
        </Link>
    )
}
