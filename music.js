import './music.css';

function Music(props) {
  return (
    <div className="music-card">
      <img src={props.image} alt={props.title} className="music-image" />
      <h3 className="music-title">{props.title}</h3>
      <audio controls className="music-player">
        <source src={props.src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <p className="music-rating">Rating: {props.rating} ⭐</p>
    </div>
  );
}

export default Music;
