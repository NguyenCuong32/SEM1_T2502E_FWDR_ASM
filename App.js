
// import './App.css';
import Header from './Routes/Header';
import './Routes/Header.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MusicPage from './Pages/musicPage';
import Footer from './Routes/Footer';
import './Routes/Footer.css';
import AlbumPage from './Pages/albumPage';
import LoginPage from './Pages/LoginPage';
import ScrollToTop from './Components/scrollToTop';


function App() {
  return (
    <div className="App">
      <header>
        <Router>
          <Header />
          <Routes>
            <Route path="/aboutus" element={<h1>About Us</h1>} />
            <Route path="/music" element={<MusicPage/>} />
            <Route path="/albums" element={<AlbumPage/>} />
            <Route path="/login" element={<LoginPage/>} />
          </Routes>
        </Router>
      </header>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
