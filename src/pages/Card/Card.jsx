import React from 'react';
import { Songs } from '../../components/Songs';
import { Cards } from '../../components/Cards';
import { ArtistsSlider } from '../../components/ArtistsSlider';
import { Header } from '../../components/Header';
import { useParams } from 'react-router-dom';
import playIcon from '../../assets/icons/play.svg';
import pausedIcon from '../../assets/icons/paused.svg';

export const Card = ({ entireSongs, ArtistsList }) => {
  let { card } = useParams();
  let cardElem = entireSongs.filter(item=>item.name == card)[0];

  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef();
  
  const play = () => {
        
    const audio = audioRef.current;
    audio.volume = 0.5;
    if(!isPlaying){
        setIsPlaying(true);
        audio.play();
    } 
    if(isPlaying){
        setIsPlaying(false);
        audio.pause();
    }
} 

  return (
    <div className="card">
      
      <div className="cardItem">
        <div className="container">
          <div className="cardPicture">
            <img src={cardElem.imageUrl} alt="" />
          </div>
          <div className="cardRight">
            <audio  ref={audioRef} src={cardElem.songUrl}></audio>
            <div className="cardName">
              {cardElem.name}
            </div>
            <div className="cardViews">
              {cardElem.listenAmount.toLocaleString('ru')} прослушиваний
            </div>
            <div className="cardPlay">
              <button className="buttonIcon" onClick={play}>
                {
                  !isPlaying ?
                    <img src={playIcon} alt="play icon" />
                    : <img src={pausedIcon} alt="play icon" />
                }

              </button>
            </div>
          </div>
        </div>
      </div>
      <Cards ArtistSongs={entireSongs}/>
      <ArtistsSlider ArtistsList={ArtistsList}/>
    </div>
  )
}
