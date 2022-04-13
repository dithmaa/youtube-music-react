import React from 'react'

export const ArtistsItem = ({avatar, onClick}) => {
    console.log(avatar);
    return (
        <div className="artistsItem" onClick={onClick}>
            <img src={avatar} alt="Artists Card" />
        </div>
    )
}
