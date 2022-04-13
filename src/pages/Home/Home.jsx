import React from 'react';
import { Songs } from '../../components/Songs'; 
import { Cards } from '../../components/Cards'; 
import { ArtistsSlider } from '../../components/ArtistsSlider'; 

export const Home = ({ArtistsList}) => {
  return (
    <div className="homePage">
        <Songs/>            
        <Cards/>
        <ArtistsSlider ArtistsList={ArtistsList}/>
    </div>
  )
}
