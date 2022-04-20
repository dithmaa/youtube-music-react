import React from 'react';
import { Songs } from '../../components/Songs'; 
import { Cards } from '../../components/Cards'; 
import { ArtistsSlider } from '../../components/ArtistsSlider'; 
import { Header } from '../../components/Header';

export const Home = ({ArtistsList}) => {
  const entireSongs = ArtistsList.map(({songs})=>{
    return songs;
  }).flat();
  return (
    <div className="homePage">
        <Songs ArtistSongs={entireSongs}/>            
        <Cards/>
        <ArtistsSlider ArtistsList={ArtistsList}/>
    </div>
  )
}
