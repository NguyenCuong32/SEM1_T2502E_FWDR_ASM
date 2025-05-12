import PlaySound from './component/playSound';
import Header from './routes/header';
import { BrowserRouter as Router } from 'react-router-dom';
import SongList from './component/songList';
import Footer from './component/footer';

function App() {
  return (
    <div>
      <Router>
        <Header />
        
      </Router>
      <PlaySound />
      <SongList />
      <Footer />
    </div>
  );
}

export default App;
