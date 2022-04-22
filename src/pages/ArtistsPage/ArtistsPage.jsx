import React from 'react';
import { Songs } from '../../components/Songs';
import { Cards } from '../../components/Cards';
import { ArtistsSlider } from '../../components/ArtistsSlider';
import { Header } from '../../components/Header';
import { useParams } from 'react-router-dom';

export const ArtistsPage = ({ ArtistsList }) => {
  let { id } = useParams();
  let ArtistsListItem = ArtistsList.filter(item=>item.id == id)[0];

  return (
    <div className="homePage">
      <Header {...ArtistsListItem}/>
      <Songs ArtistSongs={ArtistsListItem.songs}/>
      <Cards ArtistSongs={ArtistsListItem.songs} />
      <ArtistsSlider ArtistsList={ArtistsList} />
    </div>
  )
}
