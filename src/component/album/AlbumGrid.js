import React from 'react';
import Album from './Album';
import Albums from '../../data/Albums';
function AlbumGrid() {
  return (
    <div className="album-grid">
      {Albums.map(album => (
        <Album key={album.id} album={album} />
      ))}
    </div>
  );
}

export default AlbumGrid;