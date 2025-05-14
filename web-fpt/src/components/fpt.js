import React from "react";
import "./fpt.css";
import FptList from "./fptlist";
import Navbar from "./navbar"; 

const Fpt = () => {
  return (
    <div className="container">
      <header className="header">
        <h2><i>Duration: 60 minutes | Marks: 15</i></h2>
        
      </header>

       

      <section className="player">
        <div className="song-info">
          <div className="song-title">🎵 Take me to your heart</div>
          <audio controls>
            <source src="#" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p className="lyrics">
            Take me to your heart, take me to your soul<br />
            Give me your hand before I’m old<br />
            Show me what love is, haven’t got a clue<br />
            Show me that wonders can be true
          </p>
        </div>
      </section>

     
    </div>
  );
};

export default Fpt;
