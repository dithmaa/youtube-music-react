import React from 'react';
import { CardsItem } from '../CardsItem';
import worldIcon from '../../assets/icons/world-icon.svg';

export const Cards = ({ArtistSongs}) => {
    return (
        <div className="cards">
            <div className="container">
                <h3 className='cardsTitle'>
                    <span>Publications</span>
                    <img src={worldIcon} alt="world-icon" />
                </h3>
                <div className="cardsWrapper d-flex">
                    {
                        ArtistSongs.map((obj, index)=>((
                            <CardsItem key={obj.name + "_" + index}   imageUrl={obj.imageUrl} name={obj.name}/>
                        )))
                        
                    }
                </div>
            </div>

        </div>
    )
}
