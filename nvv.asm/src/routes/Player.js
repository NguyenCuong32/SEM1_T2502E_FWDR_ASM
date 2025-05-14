// import React from "react";
// import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";

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
    <Card className="player">
      <div className="player-machine">
        <audio
          ref={audioRef}
          controls
          className="container-fluid justify-content-center align-items-center m-3 me-4"
          width="10%"></audio>
      </div>
      <div className="container-fluid justify-content-center align-items-center m-3">
        <div className="playing-info">
          <img
            src="./image/music-player.png"
            alt="Now playing"
            className="playing-info img"
          />
          <span className="container-fluid justify-content-center align-items-between playing-title">
            {title || "No title"}
          </span>
          {lyrics && <p className="player-lyrics">{lyrics}</p>}
        </div>
      </div>
    </Card>
  );
}

export default Player;
