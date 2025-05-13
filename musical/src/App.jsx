import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MusicGrid from "./components/MusicGrid";
import Footer from "./components/Footer";
import Login from "./components/Login";
import musicData from "./data/data.json";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const [songs] = useState(musicData.songs);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [showPlayer, setShowPlayer] = useState(true);

  const handleSelectSong = (song) => {
    setCurrentSong(song);
    setShowPlayer(true);
  };

  const togglePlayer = () => {
    setShowPlayer(!showPlayer);
  };

  return (
    <Router>
      <div className="app">
        <Header />

        <main className="container">
          {currentSong && showPlayer && <MusicPlayer song={currentSong} />}
          {currentSong && (
            <div className="toggle-player-btn" onClick={togglePlayer}>
              {showPlayer ? "Ẩn trình phát nhạc" : "Hiện trình phát nhạc"}
            </div>
          )}
          <Routes>
            <Route
              path="/"
              element={
                <MusicGrid songs={songs} onSelectSong={handleSelectSong} />
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
