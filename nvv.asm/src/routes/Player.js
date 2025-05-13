import React from "react";
import { Link } from "react-router-dom";

function Player({ title, audioSrc, lyrics }) {
  return (
    <div className="player">
      <audio
        controls
        src={audioSrc}
        className="media-audio"
        style={{ width: "100%" }}></audio>
      <h4>
        <img
          src="./image/music-player.png"
          alt="player"
          style={{ width: "10px" }}></img>{" "}
        {title}
      </h4>
      <p>{lyrics}</p>
    </div>
  );
}

export default Player;
