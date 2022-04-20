import React from 'react';
import verified from '../../assets/icons/verified.svg';
import musicIcon from '../../assets/icons/music-amount.svg';
import followerAmountIcon from '../../assets/icons/follower-amount.svg';


export const Header = ({name, totalListenAmount, followerAmount, cover, avatar}) => {
    console.log(name);
    return (
        <header className='header'
            style={{ "backgroundImage": `url(${cover})` }}

        >
            <div className="headerOverflow"></div>
            <div className="container d-flex jcsb full-height aife">
                <div className="headerContent d-flex aife">
                    <div className="headerAvatar">
                        <img src={avatar} alt="Arsist Avatar" />
                    </div>
                    <div className="headerCenter d-flex fxdc jcfe">
                        <div className="headerCenterTop d-flex aife">
                            <h2 className="headerTitle headerTitleSmall">
                                { name }
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
                                       {totalListenAmount} Monthly Listener
                                    </div>
                                </div>
                                <span className="headerAmountDash">
                                    -
                                </span>
                                <div className="headerAmountItem d-flex">
                                    <div className="headerAmountIcon">
                                        <img src={followerAmountIcon} alt="Follower Amount Icon" />
                                    </div>
                                    <div className="headerAmountNumbers">
                                        {followerAmount} Follower
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
