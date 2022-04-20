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
    cover: "https://i.ibb.co/qmG0Hm6/2.jpg",
    avatar: "https://upload.wikimedia.org/wikipedia/ru/0/00/Trap_Luv.jpg",
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
