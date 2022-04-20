import { Sidebar } from './components/Sidebar'; 
import { Artists } from './pages/Artists'; 
import { Home } from './pages/Home'; 
import { ArtistsPage } from './pages/ArtistsPage'; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const ArtistsList = [
  {
    id: 0,
    name: "6ix9ine",
    totalListenAmount: 13925,
    followerAmount: 9300,
    cover: "https://i.ibb.co/GdKBS7M/1.jpg",
    avatar: "https://outstyle.org/images/news/2/2/9/Tekashi-6ix9ine.jpg",
    songs: [
      {
        id: 0,
        name: "Fefe",
        listenAmount: 300,
        imageUrl: 'https://i.scdn.co/image/ab67616d0000b273a16370461881d18ace95d83f',
        songUrl: 'https://www.mboxdrive.com/Fefe.mp3'
      },
      {
        id: 1,
        name: "Gooba",
        listenAmount: 325,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/d/d1/Gooba.png',
        songUrl: 'https://www.mboxdrive.com/Gooba.mp3'
      },
      {
        id: 2,
        name: "Billy",
        listenAmount: 320,
        imageUrl: 'https://images.genius.com/0e858a12379a5dedcc4fbc25195d59f3.1000x1000x1.png',
        songUrl: 'https://www.mboxdrive.com/Billy.mp3'
      }
    ]
  },
  {
    id: 1,
    name: "Big Baby Tape",
    totalListenAmount: 925,
    followerAmount: 1300,
    cover: "https://i.ibb.co/qmG0Hm6/2.jpg",
    avatar: "https://upload.wikimedia.org/wikipedia/ru/0/00/Trap_Luv.jpg",
    songs: [
      {
        id: 0,
        name: "Trap Luv",
        listenAmount: 300,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/0/00/Trap_Luv.jpg',
        songUrl: 'https://www.mboxdrive.com/Fefe.mp3'
      },
      {
        id: 1,
        name: "Gimme the loot",
        listenAmount: 325,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/8/80/Dragonborn.jpg',
        songUrl: 'https://www.mboxdrive.com/Fefe.mp3'  
      },
      {
        id: 2,
        name: "Kari",
        listenAmount: 320,
        imageUrl: 'https://images.genius.com/ab6849cdb3eec53c5f223c0111f820aa.1000x1000x1.jpg',
        songUrl: 'https://www.mboxdrive.com/Fefe.mp3'  
      },
      {
        id: 3,
        name: "Balance",
        listenAmount: 320,
        imageUrl: 'https://images.genius.com/1789b168a9beb7dae46ab1ac1b2ae062.1000x1000x1.jpg',
        songUrl: 'https://www.mboxdrive.com/Fefe.mp3'  
      }
    ]
  },
  {
    id: 2,
    name: "Nara Baby",
    totalListenAmount: 9325,
    followerAmount: 13200,
    cover: "https://i.ibb.co/Bq2WcKm/3.jpg",
    avatar: "https://i.ibb.co/T4cwLbd/3.jpg",
    songs: [
      {
        id: 0,
        name: "Baby Hustlin'",
        listenAmount: 300,
        imageUrl: 'https://images.genius.com/9e52d12579d5e8772e0456571e7537ed.1000x1000x1.jpg',
        songUrl: 'https://www.mboxdrive.com/Fefe.mp3'
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
