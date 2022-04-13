import React from 'react';
import { ArtistsItem } from '../ArtistsItem'

export const ArtistsSlider = ({ArtistsList}) => {
    return (
        <div className="cards">
            <div className="container">
                <h3 className='cardsTitle'>
                    <span>Artists</span>
                    <img src="./icons/world-icon.svg" alt="world-icon" />
                </h3>
                <div className="cardsWrapper d-flex">
                    {
                        ArtistsList.map((artist, index)=>{
                            return (
                            <ArtistsItem
                            key={artist.name + "_" + index}
                            onClick={()=>console.log(artist.id)}
                            {...artist}
                            />
                            )
                        })
                    }
                    
                </div>
            </div>

        </div>
    )
}
