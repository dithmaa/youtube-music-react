import React from 'react';
import { Songs } from '../../components/Songs'; 
import { Cards } from '../../components/Cards'; 
import { ArtistsSlider } from '../../components/ArtistsSlider'; 
import { Header } from '../../components/Header';
import { SongsSimple } from '../../components/SongsSimple';
import { useSelector } from 'react-redux';

export const Playlist = ({entireSongs}) => {
  // достать из редакса плейлисты и сохранять их в localstorage
  const songsInPlaylist = useSelector(({playlist})=>playlist.songsInPlaylist);
  return (
    <div className="homePage">
        <SongsSimple ArtistSongs={songsInPlaylist}/>            
    </div>
  )
}
