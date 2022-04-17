import { Sidebar } from './components/Sidebar'; 
import { Artists } from './pages/Artists'; 
import { Home } from './pages/Home'; 
import { ArtistsPage } from './pages/ArtistsPage'; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const ArtistsList = [
  {
    id: 0,
    name: "6ix9ine",
    totalListenAmount: 925,
    followerAmount: 1300,
    cover: "./header/background/1.jpg",
    avatar: "./header/avatar/1.png",
    songs: [
      {
        id: 0,
        name: "Fefe",
        listenAmount: 300,
        imageUrl: './Songs/pictures/1.png'
      },
      {
        id: 1,
        name: "Gooba",
        listenAmount: 325,
        imageUrl: './Songs/pictures/2.png'  
      },
      {
        id: 2,
        name: "Billy",
        listenAmount: 320,
        imageUrl: './Songs/pictures/3.png'  
      }
    ]
  },
  {
    id: 1,
    name: "Big Baby Tape",
    totalListenAmount: 925,
    followerAmount: 1300,
    cover: "./header/background/2.jpg",
    avatar: "./header/avatar/2.png",
    songs: [
      {
        id: 0,
        name: "Trap Luv",
        listenAmount: 300,
        imageUrl: './Songs/pictures/4.png'
      },
      {
        id: 1,
        name: "Gimme the loot",
        listenAmount: 325,
        imageUrl: './Songs/pictures/5.png'  
      },
      {
        id: 2,
        name: "Kari",
        listenAmount: 320,
        imageUrl: './Songs/pictures/6.png'  
      }
    ]
  }
]

function App() {
  return (
    <div className="youtube-music">
      <div className="wrapper">
      <Router>
        <Sidebar/>
        <main className="content">
          
            <Routes>
              <Route path="/" element={<Home ArtistsList={ArtistsList}/> }/>
              <Route path="/artists" element={<Artists ArtistsList={ArtistsList}/> }/>
              <Route path="/artists/:id" element={<ArtistsPage ArtistsList={ArtistsList}/> }/>
            </Routes>
          
          
        </main>
        </Router>
      </div>
      
    </div>
  );
}

export default App;
