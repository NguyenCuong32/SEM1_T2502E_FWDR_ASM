import React, { useState } from "react";

const MusicPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <div className="player-container">
        <div className="player-controls">
          <button className="play-btn" onClick={togglePlay}>
            {isPlaying ? "❚❚" : "▶"}
          </button>
          <span className="time">0:00 / 1:23</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: "20%" }}></div>
          </div>
          <button className="volume-btn">🔊</button>
          <button className="more-btn">⋮</button>
        </div>

        <div className="song-info">
          <div className="song-icon">
            <span className="music-note">♪</span>
          </div>
          <div className="song-details">
            <h3 className="song-title">{song.title}</h3>
            <div className="song-lyrics">{song.lyrics}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
