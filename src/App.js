import { Sidebar } from './components/Sidebar';
import { Artists } from './pages/Artists';
import { Home } from './pages/Home';
import { ArtistsPage } from './pages/ArtistsPage';
import { Playlist } from './pages/Playlist';
import { Card } from './pages/Card';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';


function App() {
  const ArtistsList = useSelector(({playlist})=> playlist.artistsList);

  const entireSongs = ArtistsList.map(({ songs }) => {
    return songs;
  }).flat();
  return (
    <div className="youtube-music">
      <div className="wrapper">
        
          <Router>
            <Sidebar />
            <main className="content">

              <Routes>
                <Route path="/" element={<Home ArtistsList={ArtistsList} entireSongs={entireSongs} />} />
                <Route path="/artists" element={<Artists ArtistsList={ArtistsList} />} />
                <Route path="/artists/:id" element={<ArtistsPage ArtistsList={ArtistsList} />} />
                <Route path="/card/:card" element={<Card entireSongs={entireSongs} ArtistsList={ArtistsList} />} />
                <Route path="/playlist" element={<Playlist entireSongs={entireSongs} ArtistsList={ArtistsList} />} />
              </Routes>


            </main>
          </Router>

        
      </div>

    </div>
  );
}

export default App;
