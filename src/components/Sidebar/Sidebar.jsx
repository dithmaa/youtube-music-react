import React from 'react';
import css from './Sidebar.module.sass';


export const Sidebar = () => {
    return (
        <aside className={css.sidebar}>
            <div className="container">
                <div className={css.logo + " logo d-flex aic"}>
                    <div className={css.logoIcon + " logoIcon"}>
                        <img src="./logo192.png" width={72} alt="" />
                    </div>
                    <div className={css.logoText + ' logoText'}>
                        <img src="./music.png" width={166} height={56} alt="" />
                    </div>
                </div>
                <div className={css.sidebarContent}>
                    <a href="#" className={css.sidebarItem}>
                        <img src="./icons/home.svg" alt="home-icon" />
                        <span>Home</span>
                    </a>
                    <a href="#" className={css.sidebarItem}>
                        <img src="./icons/playlist.svg" alt="playlist-icon" />
                        <span>Playlist</span>
                    </a>
                    <a href="#" className={css.sidebarItem}>
                        <img src="./icons/mic.svg" alt="mic-icon" />
                        <span>Artist</span>
                    </a>
                    <a href="#" className={css.sidebarItem}>
                        <img src="./icons/medal.svg" alt="medal-icon" />
                        <span>Premium</span>
                    </a>
                    <a href="#" className={css.sidebarItem}>
                        <img src="./icons/heart_like.svg" alt="heart-like-icon" />
                        <span>Liked</span>
                    </a>
                    <a href="#" className={css.sidebarItem}>
                        <img src="./icons/user.svg" alt="user-icon" />
                        <span>My Account</span>
                    </a>
                    
                </div>
            </div>
        </aside>
    )
}
