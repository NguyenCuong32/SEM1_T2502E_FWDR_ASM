import React from 'react';
import './App.css';
import AlbumGrid from './component/album/AlbumGrid';
import Header from './component/Header';
import Footer from './component/Footer';
function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <AlbumGrid />
      </div>
      <Footer />
    </div>
  );
}

export default App;
