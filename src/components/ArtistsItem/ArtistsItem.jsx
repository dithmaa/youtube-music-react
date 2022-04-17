import React from 'react'
import { Link } from 'react-router-dom';
import avatar from '../../assets/header/avatar/1.png';

export const ArtistsItem = ({onClick, id}) => {
    return (
        <Link to={`/artists/${id}`}>
            <div className="artistsItem" onClick={onClick}>
                <img src={avatar} alt="Artists Card" />
            </div>
        </Link>
    )
}
