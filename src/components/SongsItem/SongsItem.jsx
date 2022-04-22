import React, { useEffect, useRef } from 'react';
import explicitIcon from '../../assets/icons/explicit.svg';
import addToPlaylistIcon from '../../assets/icons/add-to-playlist.svg';
import playIcon from '../../assets/icons/play.svg';
import pausedIcon from '../../assets/icons/paused.svg';
import moreIcon from '../../assets/icons/more-dots.svg';

import { Howl, Howler } from 'howler';



export const SongsItem = ({id,name,listenAmount,imageUrl, songUrl, index}) => {
    
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
                <span className="songsItemPosition">
                    {index + 1} -
                </span>
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
            <div className="songsItemViews">
                <span>{
                    listenAmount.toLocaleString('ru')
                }</span>
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
                <button className="buttonIcon">
                    <svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.96111 23.5C1.53133 17.625 3.00792 8.8125 10.3909 5.875C17.7739 2.9375 22.2036 8.8125 23.6802 11.75C25.1568 8.8125 31.0632 2.9375 38.4462 5.875C45.8291 8.8125 45.8291 17.625 41.3994 23.5C36.9696 29.375 23.6802 41.125 23.6802 41.125C23.6802 41.125 10.3909 29.375 5.96111 23.5Z" stroke="#C4C4C4" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button className="buttonIcon">
                    <img src={addToPlaylistIcon} alt="playlist" />
                </button>
                <button className="buttonIcon">
                    <img src={moreIcon} alt="More Settings" />
                </button>
            </div>
        </div>
    )
}
