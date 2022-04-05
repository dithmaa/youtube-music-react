import { Sidebar } from './components/Sidebar';
function App() {
  return (
    <div className="youtube-music">
      <div className="wrapper">
        <Sidebar/>
        <main className="content">
          
            <header className='header' 
            style={{"backgroundImage": "url(./header/background/2.jpg)"}} 
            
            >
              <div className="headerOverflow"></div>
              <div className="container d-flex jcsb full-height aife">
                <div className="headerContent d-flex aife">
                  <div className="headerAvatar">
                    <img src="./header/avatar/2.png" alt="Arsist Avatar" />
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
            <div className="songs">
              <div className="container">
                <h3 className='songsTitle'>
                  <span>Most Popular</span>
                  <img src="./icons/big-finger-icon.svg" alt="like-icon" />
                </h3>
                <div className="songsWrapper">
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
                          <path d="M5.96111 23.5C1.53133 17.625 3.00792 8.8125 10.3909 5.875C17.7739 2.9375 22.2036 8.8125 23.6802 11.75C25.1568 8.8125 31.0632 2.9375 38.4462 5.875C45.8291 8.8125 45.8291 17.625 41.3994 23.5C36.9696 29.375 23.6802 41.125 23.6802 41.125C23.6802 41.125 10.3909 29.375 5.96111 23.5Z" stroke="#C4C4C4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
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
                          <path d="M5.96111 23.5C1.53133 17.625 3.00792 8.8125 10.3909 5.875C17.7739 2.9375 22.2036 8.8125 23.6802 11.75C25.1568 8.8125 31.0632 2.9375 38.4462 5.875C45.8291 8.8125 45.8291 17.625 41.3994 23.5C36.9696 29.375 23.6802 41.125 23.6802 41.125C23.6802 41.125 10.3909 29.375 5.96111 23.5Z" stroke="#C4C4C4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
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
                          <path d="M5.96111 23.5C1.53133 17.625 3.00792 8.8125 10.3909 5.875C17.7739 2.9375 22.2036 8.8125 23.6802 11.75C25.1568 8.8125 31.0632 2.9375 38.4462 5.875C45.8291 8.8125 45.8291 17.625 41.3994 23.5C36.9696 29.375 23.6802 41.125 23.6802 41.125C23.6802 41.125 10.3909 29.375 5.96111 23.5Z" stroke="#C4C4C4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
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
                          <path d="M5.96111 23.5C1.53133 17.625 3.00792 8.8125 10.3909 5.875C17.7739 2.9375 22.2036 8.8125 23.6802 11.75C25.1568 8.8125 31.0632 2.9375 38.4462 5.875C45.8291 8.8125 45.8291 17.625 41.3994 23.5C36.9696 29.375 23.6802 41.125 23.6802 41.125C23.6802 41.125 10.3909 29.375 5.96111 23.5Z" stroke="#C4C4C4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
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
                          <path d="M5.96111 23.5C1.53133 17.625 3.00792 8.8125 10.3909 5.875C17.7739 2.9375 22.2036 8.8125 23.6802 11.75C25.1568 8.8125 31.0632 2.9375 38.4462 5.875C45.8291 8.8125 45.8291 17.625 41.3994 23.5C36.9696 29.375 23.6802 41.125 23.6802 41.125C23.6802 41.125 10.3909 29.375 5.96111 23.5Z" stroke="#C4C4C4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
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
                </div>
              </div>
            </div>
            <div className="cards">
                <div className="container">
                  <h3 className='cardsTitle'>
                    <span>Publications</span>
                    <img src="./icons/world-icon.svg" alt="world-icon" />
                  </h3>
                  <div className="cardsWrapper d-flex">
                    <div className="cardsItem">
                      <img src="./Cards/pictures/1.png" alt="Music Card" />
                    </div>
                    <div className="cardsItem">
                      <img src="./Cards/pictures/1.png" alt="Music Card" />
                    </div>
                    <div className="cardsItem">
                      <img src="./Cards/pictures/1.png" alt="Music Card" />
                    </div>
                    <div className="cardsItem">
                      <img src="./Cards/pictures/1.png" alt="Music Card" />
                    </div>
                    <div className="cardsItem">
                      <img src="./Cards/pictures/1.png" alt="Music Card" />
                    </div>
                    <div className="cardsItem">
                      <img src="./Cards/pictures/1.png" alt="Music Card" />
                    </div>
                    <div className="cardsItem">
                      <img src="./Cards/pictures/1.png" alt="Music Card" />
                    </div>
                    <div className="cardsItem">
                      <img src="./Cards/pictures/1.png" alt="Music Card" />
                    </div>
                    <div className="cardsItem">
                      <img src="./Cards/pictures/1.png" alt="Music Card" />
                    </div>
                  </div>
                </div>
                
            </div>
        </main>
      </div>
    </div>
  );
}

export default App;
