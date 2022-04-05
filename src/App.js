import { Sidebar } from './components/Sidebar'; 
import { Header } from './components/Header'; 
import { Songs } from './components/Songs'; 
import { Cards } from './components/Cards'; 
function App() {
  return (
    <div className="youtube-music">
      <div className="wrapper">
        <Sidebar/>
        <main className="content">
          
            <Header/>
            <Songs/>            
            <Cards/>
        </main>
      </div>
    </div>
  );
}

export default App;
