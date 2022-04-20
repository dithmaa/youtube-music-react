import React from 'react';
import { SongsItem } from '../SongsItem';
import bigFingerIcon from '../../assets/icons/big-finger-icon.svg'

export const Songs = ({ArtistSongs}) => {
    return (
        <div className="songs">
            <div className="container">
                <h3 className='songsTitle'>
                    <span>Most Popular</span>
                    <img src={bigFingerIcon} alt="like-icon" />
                </h3>
                <div className="songsWrapper">
                    {
                        ArtistSongs.map((song)=>{
                            return(
                                <SongsItem {...song}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
