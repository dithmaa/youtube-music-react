import React from 'react';
import { Songs } from '../../components/Songs';
import { Cards } from '../../components/Cards';
import { ArtistsSlider } from '../../components/ArtistsSlider';
import { Header } from '../../components/Header';
import { useParams } from 'react-router-dom';

export const ArtistsPage = ({ ArtistsList }) => {

  let { id } = useParams();

  return (
    <div className="homePage">
      <Header />
      <Songs />
      <Cards />
      <ArtistsSlider ArtistsList={ArtistsList} />
    </div>
  )
}
