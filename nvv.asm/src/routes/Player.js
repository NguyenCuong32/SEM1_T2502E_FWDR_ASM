// import React from "react";
// import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";

import "./Player.css";

function Player({ title, audioSrc, lyrics }) {
  const audioRef = useRef(null);
  useEffect(() => {
    if (audioRef.current && audioSrc) {
      audioRef.current.src = audioSrc;
      audioRef.current
        .play()
        .catch((error) => console.error("Error playing audio:", error));
    }
  }, [audioSrc]);
  if (!audioSrc) {
    return null;
  }

  return (
    <div>
      <div>
        <img
          src="./image/music-player.png"
          alt="Now playing"
          className="player-album-art"
          style={{ width: "10px" }}
        />
        <span className="player-title">{title || "No title"}</span>
      </div>
      <audio ref={audioRef} controls className="player-audio-element"></audio>
      {lyrics && <p className="player-lyrics">{lyrics}</p>}
    </div>
  );
}

export default Player;
