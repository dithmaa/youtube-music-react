import React from 'react'

export const SongsItem = () => {
    return (
        <div className="songsItem">
            <div className="songsItemInfo">
                <span className="songsItemPosition">
                    1 -
                </span>
                <div className="songsItemPicture">
                    <img src="./songs/pictures/1.png" alt="song picture" />
                </div>
                <div className="songsItemTitle">
                    <h4>
                        Fefe
                    </h4>
                    <span className="songsItemExplicit">
                        <img src="./icons/explicit.svg" alt="explicit" />
                    </span>
                </div>
            </div>
            <div className="songsItemViews">
                <span>681.049.060</span>
            </div>
            <div className="songsItemActions">
                <button className="buttonIcon">
                    <img src="./icons/play.svg" alt="play icon" />
                </button>
                <button className="buttonIcon">
                    <svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.96111 23.5C1.53133 17.625 3.00792 8.8125 10.3909 5.875C17.7739 2.9375 22.2036 8.8125 23.6802 11.75C25.1568 8.8125 31.0632 2.9375 38.4462 5.875C45.8291 8.8125 45.8291 17.625 41.3994 23.5C36.9696 29.375 23.6802 41.125 23.6802 41.125C23.6802 41.125 10.3909 29.375 5.96111 23.5Z" stroke="#C4C4C4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <button className="buttonIcon">
                    <img src="./icons/add-to-playlist.svg" alt="playlist" />
                </button>
                <button className="buttonIcon">
                    <img src="./icons/more-dots.svg" alt="More Settings" />
                </button>
            </div>
        </div>
    )
}
