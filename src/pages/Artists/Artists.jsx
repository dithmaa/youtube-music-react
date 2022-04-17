import React from 'react';

import { Header } from '../../components/Header';
import { Songs } from '../../components/Songs';
import { Cards } from '../../components/Cards';
import { ArtistsSlider } from '../../components/ArtistsSlider';
import { ArtistsItem } from '../../components/ArtistsItem';
import worldIcon from "../../assets/icons/world-icon.svg";

export const Artists = ({ArtistsList}) => {
  return (
    <div className='artists'>
      <div className="container">
        <h3 className='cardsTitle'>
          <span>Artists</span>
          <img src={worldIcon} alt="world-icon" />
        </h3>
        <div className="artistsWrapper d-flex fww">
          {
            ArtistsList.map((item, index)=> {
              return <ArtistsItem 
              {...item}
              key={item.name + "_" + item.index}/>
            })
          }
          
        </div>
      </div>
    </div>
  )
}
