import React from 'react';
import { CardsItem } from '../CardsItem'

export const Cards = () => {
    return (
        <div className="cards">
            <div className="container">
                <h3 className='cardsTitle'>
                    <span>Publications</span>
                    <img src="./icons/world-icon.svg" alt="world-icon" />
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
