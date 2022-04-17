import React from 'react';
import { Link } from 'react-router-dom';
import css from './Sidebar.module.sass';
import homeSvg from '../../assets/icons/home.svg';
import playlistSvg from '../../assets/icons/playlist.svg';
import micSvg from '../../assets/icons/mic.svg';
import medalSvg from '../../assets/icons/medal.svg';
import heartSvg from '../../assets/icons/heart_like.svg';
import userSvg from '../../assets/icons/user.svg';

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
                    <Link to="/" className={css.sidebarItem}>
                        <img src={homeSvg} alt="home-icon" />
                        <span>Home</span>
                    </Link>
                    <Link to="/Playlist" className={css.sidebarItem}>
                        <img src={playlistSvg} alt="playlist-icon" />
                        <span>Playlist</span>
                    </Link>
                    <Link to="/artists" className={css.sidebarItem}>
                        <img src={micSvg} alt="mic-icon" />
                        <span>Artist</span>
                    </Link>
                    <Link to="/premium" className={css.sidebarItem}>
                        <img src={medalSvg} alt="medal-icon" />
                        <span>Premium</span>
                    </Link>
                    <Link to="Liked" className={css.sidebarItem}>
                        <img src={heartSvg} alt="heart-like-icon" />
                        <span>Liked</span>
                    </Link>
                    <Link to="account" className={css.sidebarItem}>
                        <img src={userSvg} alt="user-icon" />
                        <span>My Account</span>
                    </Link>
                    
                </div>
            </div>
        </aside>
    )
}
