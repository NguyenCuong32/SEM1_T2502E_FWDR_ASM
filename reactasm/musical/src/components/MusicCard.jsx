const MusicCard = ({ song, onSelectSong }) => {
  const renderStars = (rating) => {
    return Array(rating)
      .fill()
      .map((_, i) => (
        <span key={i} className="star">
          ★
        </span>
      ));
  };

  return (
    <div className="music-card" onClick={() => onSelectSong(song)}>
      <div className="card-image">
        <img src={song.image} alt={song.title} />
      </div>
      <div className="card-title">{song.title}</div>
      <div className="card-rating">{renderStars(song.rating)}</div>
    </div>
  );
};

export default MusicCard;
