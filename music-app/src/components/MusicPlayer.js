import React from 'react';
import './MusicPlayer.css';

function MusicPlayer() {
  return (
    <div className="music-player">
      <audio controls>
        <source src="music/sample.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div className="lyrics">
        <p><strong>Take me to your heart</strong></p>
        <p>Take me to your heart, take me to your soul</p>
        <p>Give me your hand before I'm old</p>
        <p>Show me what love is, haven't got a clue</p>
        <p>Show me that wonders can be true</p>
      </div>
    </div>
  );
}

export default MusicPlayer;
