  import React from 'react';
  import './Body.css';
  import BodyList from './BodyList';
  import Music from '../data/Music.json';

  const Body = () => {
    return (
      <div className="body">
        <div className="player-section">
          <audio controls>
            <source src="/nhac.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <div className="lyrics">
            <div className="title">🎵 Take me to your heart</div>
            <p>
              Take me to your heart, take me to your soul<br />
              Give me your hand before I'm old<br />
              Show me what love is, haven't got a clue<br />
              Show me that wonders can be true
            </p>
          </div>
        </div>

        <div className="music-grid">
          {Music.map((item, index) => (
            <BodyList key={index} data={item} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;
