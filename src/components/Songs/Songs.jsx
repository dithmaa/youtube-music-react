import React from 'react';
import { SongsItem } from '../SongsItem';

export const Songs = () => {
    return (
        <div className="songs">
            <div className="container">
                <h3 className='songsTitle'>
                    <span>Most Popular</span>
                    <img src="./icons/big-finger-icon.svg" alt="like-icon" />
                </h3>
                <div className="songsWrapper">
                    <SongsItem/>
                </div>
            </div>
        </div>
    )
}
