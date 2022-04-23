import React from 'react';
import { SongsItem } from '../SongsItem';
import bigFingerIcon from '../../assets/icons/big-finger-icon.svg'
import { useDispatch } from 'react-redux';
import { setSongInPlaylist } from '../../redux/playlist/reducer';
import { SongsSimpleItem } from '../SongsSimpleItem';

export const SongsSimple = ({ArtistSongs}) => {
    const dispatch = useDispatch();
    const addSongToPlaylist = (song) => {
        dispatch(setSongInPlaylist(song));
    }
    return (
        <div className="songs">
            <div className="container">
                <h3 className='songsTitle'>
                    <span>Tracks</span>
                    <img src={bigFingerIcon} alt="like-icon" />
                </h3>
                <div className="songsWrapper">
                    {
                        ArtistSongs.map((song, index)=>{
                            return(
                                <SongsSimpleItem
                                addSongToPlaylist={()=>addSongToPlaylist(song)}
                                key={song.name + "_" + index} {...song} index={index}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
