import React from 'react';
import { CardsItem } from '../CardsItem';
import worldIcon from '../../assets/icons/world-icon.svg';

export const Cards = () => {
    return (
        <div className="cards">
            <div className="container">
                <h3 className='cardsTitle'>
                    <span>Publications</span>
                    <img src={worldIcon} alt="world-icon" />
                </h3>
                <div className="cardsWrapper d-flex">
                    <CardsItem/>
                    <CardsItem/>
                    <CardsItem/>
                    <CardsItem/>
                    <CardsItem/>
                    <CardsItem/>
                    <CardsItem/>
                    <CardsItem/>
                    <CardsItem/>
                    <CardsItem/>
                    <CardsItem/>
                </div>
            </div>

        </div>
    )
}
