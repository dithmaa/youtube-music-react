import React from 'react';
import { Songs } from '../../components/Songs'; 
import { Cards } from '../../components/Cards'; 
import { ArtistsSlider } from '../../components/ArtistsSlider'; 
import { Header } from '../../components/Header';

export const Home = ({entireSongs, ArtistsList}) => {
  const firstFourSongs = entireSongs.slice(0,4);
  return (
    <div className="homePage">
        <Songs ArtistSongs={firstFourSongs}/>            
        <Cards ArtistSongs={entireSongs}/>
        <ArtistsSlider ArtistsList={ArtistsList}/>
    </div>
  )
}
