import React from 'react';
import { SongsItem } from '../SongsItem';
import bigFingerIcon from '../../assets/icons/big-finger-icon.svg'
import { useDispatch, useSelector } from 'react-redux';
import { setSongInPlaylist } from '../../redux/playlist/reducer';
import { SongsSimpleItem } from '../SongsSimpleItem';

export const Songs = ({ArtistSongs}) => {
    const dispatch = useDispatch();
    const addSongToPlaylist = (song) => {
        dispatch(setSongInPlaylist(song));
    }

    return (
        <div className="songs">
            <div className="container">
                <h3 className='songsTitle'>
                    <span>Most Popular</span>
                    <img src={bigFingerIcon} alt="like-icon" />
                </h3>
                <div className="songsWrapper">
                    {
                        ArtistSongs.map((song, index)=>{
                            return(
                                <SongsItem
                                addSongToPlaylist={()=>addSongToPlaylist(song)}
                                key={song.name + "_" + index} {...song} index={index}
                                isAddedInPlaylist={false}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
