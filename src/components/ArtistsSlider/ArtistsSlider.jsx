import React from 'react';
import { ArtistsItem } from '../ArtistsItem';
import { Link } from 'react-router-dom';
import worldIcon from '../../assets/icons/world-icon.svg'

export const ArtistsSlider = ({ ArtistsList }) => {
    return (
        <div className="cards">
            <div className="container">
                <h3 className='cardsTitle'>
                    <span>Artists</span>
                    <img src={worldIcon} alt="world-icon" />
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
