import React from 'react';
function Album({ album }) {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < album.rating ? 'star filled' : 'star'}>★</span>
    ));
    return (
      <div className="album">
        <img className="album-item img" src={album.img} alt={album.title} />
        <div className="album-info">
          <div className="album-title">{album.title}</div>
          <div className="rating">{stars}</div>
        </div>
      </div>
    );
  }
  export default Album;