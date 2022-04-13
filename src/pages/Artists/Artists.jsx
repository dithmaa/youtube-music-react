import React from 'react';

import { Header } from '../../components/Header';
import { Songs } from '../../components/Songs';
import { Cards } from '../../components/Cards';
import { ArtistsSlider } from '../../components/ArtistsSlider';
import { ArtistsItem } from '../../components/ArtistsItem';

export const Artists = () => {
  return (
    <div className='artists'>
      <div className="container">
        <h3 className='cardsTitle'>
          <span>Artists</span>
          <img src="./icons/world-icon.svg" alt="world-icon" />
        </h3>
        <div className="artistsWrapper d-flex fww">
          <ArtistsItem/>
          <ArtistsItem/>
          <ArtistsItem/>
          <ArtistsItem/>
          <ArtistsItem/>
          <ArtistsItem/>
          <ArtistsItem/>
          <ArtistsItem/>
          <ArtistsItem/>
        </div>
      </div>
    </div>
  )
}
