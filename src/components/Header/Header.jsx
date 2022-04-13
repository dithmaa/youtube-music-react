import React from 'react';

export const Header = () => {
    return (
        <header className='header'
            style={{ "backgroundImage": "url(./header/background/1.jpg)" }}

        >
            <div className="headerOverflow"></div>
            <div className="container d-flex jcsb full-height aife">
                <div className="headerContent d-flex aife">
                    <div className="headerAvatar">
                        <img src="./header/avatar/1.png" alt="Arsist Avatar" />
                    </div>
                    <div className="headerCenter d-flex fxdc jcfe">
                        <div className="headerCenterTop d-flex aife">
                            <h2 className="headerTitle headerTitleSmall">
                                6ix9ine
                            </h2>
                            <div className="headerVerified">
                                <img src="./icons/verified.svg" alt="verified" />
                            </div>
                        </div>
                        <div className="headerCenterBottom">
                            <div className="headerAmount d-flex">
                                <div className="headerAmountItem d-flex">
                                    <div className="headerAmountIcon">
                                        <img src="./icons/music-amount.svg" alt="Music Key Icon" />
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
                                        <img src="./icons/follower-amount.svg" alt="Follower Amount Icon" />
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
