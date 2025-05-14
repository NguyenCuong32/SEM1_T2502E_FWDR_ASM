import React from 'react';
import Navbar from './components/Navbar';
import MusicPlayer from './components/MusicPlayer';
import SongCard from './components/SongCard';
import songs from './data/songs.json';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <MusicPlayer />
      <div className="song-grid">
        {songs.map((song, index) => (
          <SongCard key={index} song={song} />
        ))}
      </div>
    </div>
  );
}

export default App;
