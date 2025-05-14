import React, { useState } from "react";
import "./App.css";
import Header from "./routes/Header";
import MediaPage from "./pages/MediaPage";
import HomePage from "./pages/HomePage";
import Player from "./routes/Player";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const handleCurrentSong = (song) => {
    setCurrentSong(song);
  };
  return (
    <BrowserRouter>
      <Header />
      {currentSong && (
        <Player
          audioSrc={currentSong.link}
          title={currentSong.title}
          lyrics={currentSong.lyrics}
        />
      )}

      <div
        className="main-content"
        style={{
          paddingTop: "20px",
          paddingBottom: currentSong ? "40px" : "0px",
        }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/media"
            element={<MediaPage onSongSelect={handleCurrentSong} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
