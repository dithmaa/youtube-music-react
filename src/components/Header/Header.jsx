import React from 'react';
import headerBackground from '../../assets/header/background/1.jpg';
import headerAvatar from '../../assets/header/avatar/1.png';
import verified from '../../assets/icons/verified.svg';
import musicIcon from '../../assets/icons/music-amount.svg';
import followerAmount from '../../assets/icons/follower-amount.svg';


export const Header = ({title = "Имя"}) => {
    return (
        <header className='header'
            style={{ "backgroundImage": `url(${headerBackground})` }}

        >
            <div className="headerOverflow"></div>
            <div className="container d-flex jcsb full-height aife">
                <div className="headerContent d-flex aife">
                    <div className="headerAvatar">
                        <img src={headerAvatar} alt="Arsist Avatar" />
                    </div>
                    <div className="headerCenter d-flex fxdc jcfe">
                        <div className="headerCenterTop d-flex aife">
                            <h2 className="headerTitle headerTitleSmall">
                                {title}
                            </h2>
                            <div className="headerVerified">
                                <img src={verified} alt="verified" />
                            </div>
                        </div>
                        <div className="headerCenterBottom">
                            <div className="headerAmount d-flex">
                                <div className="headerAmountItem d-flex">
                                    <div className="headerAmountIcon">
                                        <img src={musicIcon} alt="Music Key Icon" />
                                    </div>
                                    <div className="headerAmountNumbers">
                                        1,985,255 Monthly Listener
                                    </div>
                                </div>
                                <span className="headerAmountDash">
                                    -
                                </span>
                                <div className="headerAmountItem d-flex">
                                    <div className="headerAmountIcon">
                                        <img src={followerAmount} alt="Follower Amount Icon" />
                                    </div>
                                    <div className="headerAmountNumbers">
                                        15,800,000 Follower
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="headerSubscribe">
                    <button className='buttonSubscribe'>
                        <img src="./icons/done-icon.svg" alt="Done Icon" />
                        <span>Subcribe</span>
                    </button>
                </div>
            </div>
        </header>
    )
}
