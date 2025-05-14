import React from 'react';
import './SongCard.css';

function SongCard({ song }) {
  return (
    <div className="song-card">
      <img src={song.image} alt={song.title} />
      <p>{song.title}</p>
      <div className="stars">
        {'★'.repeat(song.rating)}{'☆'.repeat(5 - song.rating)}
      </div>
    </div>
  );
}

export default SongCard;
