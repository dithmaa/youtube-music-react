import React, { useEffect, useRef } from 'react';
import explicitIcon from '../../assets/icons/explicit.svg';
import addToPlaylistIcon from '../../assets/icons/add-to-playlist.svg';
import playIcon from '../../assets/icons/play.svg';
import pausedIcon from '../../assets/icons/paused.svg';
import moreIcon from '../../assets/icons/more-dots.svg';

import { Howl, Howler } from 'howler';



export const SongsSimpleItem = ({id,name,listenAmount,imageUrl, songUrl, index, addSongToPlaylist}) => {
    
    const [isPlaying, setIsPlaying] = React.useState(false);
    const audioRef = useRef();
    const rootEl = useRef(null);

    const onPause = (e) => {
        const audio = audioRef.current;
        if (!rootEl.current.contains(e.target)){
            setIsPlaying(false);
            audio.pause();
        }
    }
    useEffect(() => {
        
        document.addEventListener('click', onPause);
        return () => document.removeEventListener('click', onPause);
    }, []);


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
        <div className="songsItem" ref={rootEl}>
            <div className="songsItemInfo">
                <div className="songsItemPicture">
                    <img src={imageUrl} alt="song picture" />
                </div>
                <div className="songsItemTitle">
                    <h4>
                        {name}
                    </h4>
                    <span className="songsItemExplicit">
                        <img src={explicitIcon} alt="explicit" />
                    </span>
                </div>
            </div>
            <div className="songsItemActions">
                <audio  ref={audioRef} src={songUrl}></audio>
                <button className="buttonIcon" onClick={play}>
                    {
                        !isPlaying ?
                        <img src={playIcon} alt="play icon" />
                        : <img src={pausedIcon} alt="play icon" />
                    }
                    
                </button>
                <button className="buttonIcon" onClick={addSongToPlaylist}>
                    <img src={addToPlaylistIcon} alt="playlist" />
                </button>
            </div>
        </div>
    )
}
