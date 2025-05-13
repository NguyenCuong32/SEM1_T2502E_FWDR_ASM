import Album from './Album/Album';
import './App.css';
import Navbar from './Navbar/Navbar';
import Card from './Playmusic/Card';
import Albumlist from './Album/Albumlist';
import Footer from './Footer/Footer';
import Login from './Page/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
      <div className='py-5'>
        <Card />
      </div>
      <Albumlist />
      <Footer />
    </div>
  );
}

export default App;
