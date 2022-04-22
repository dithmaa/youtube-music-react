import React from 'react';
import { Link } from 'react-router-dom';
import css from './Sidebar.module.sass';
import homeSvg from '../../assets/icons/home.svg';
import playlistSvg from '../../assets/icons/playlist.svg';
import micSvg from '../../assets/icons/mic.svg';
import medalSvg from '../../assets/icons/medal.svg';
import heartSvg from '../../assets/icons/heart_like.svg';
import userSvg from '../../assets/icons/user.svg';
import logo from '../../assets/logo192.png';
import logoText from '../../assets/music.png';
import classNames from 'classnames';

export const Sidebar = () => {
    const [activeItem, setActiveItem] = React.useState(0);
    const items = [
        {
            name: 'Home',
            iconUrl: homeSvg,
            linkTo: "/"
        },
        {
            name: 'Playlist',
            iconUrl: playlistSvg,
            linkTo: "/playlist"
        },
        {
            name: 'Artists',
            iconUrl: micSvg,
            linkTo: "/artists"
        },
        {
            name: 'Premium',
            iconUrl: medalSvg,
            linkTo: "/premium"
        },
        {
            name: 'Liked',
            iconUrl: heartSvg,
            linkTo: "liked"
        },
        {
            name: 'My Account',
            iconUrl: userSvg,
            linkTo: "account"
        },

    ];
    return (
        <aside className={css.sidebar}>
            <div className="container">
                <div className={css.logo + " logo d-flex aic"}>
                    <div className={css.logoIcon + " logoIcon"}>
                        <img src={logo} width={72} alt="" />
                    </div>
                    <div className={css.logoText + ' logoText'}>
                        <img src={logoText} width={166} height={56} alt="" />
                    </div>
                </div>
                <div className={css.sidebarContent}>
                    
                   {
                       items.map((item, index)=>((
                        <Link to={item.linkTo} className={css.sidebarItem + " " + classNames({
                            "SidebarItemActive": activeItem === index
                        })
                        }
                        onClick={()=>setActiveItem(index)}
                        key={item.name + "_" + index}
                        >
                            <img src={item.iconUrl} alt="home-icon" />
                            <span>{item.name}</span>
                        </Link>
                       )))
                   }
                    
                </div>
            </div>
        </aside>
    )
}
