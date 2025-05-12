import "./song.css"

function Song (props) {
    const stars = [...Array(5)].map((_, i) => (
    <span key={i}>{i < props.rating ? "⭐" : "☆"}</span>
  ));

  return (
    <div className="song card text-left rounded-4 p-2">
      <img src={props.image} alt={props.name} className="card-img-top rounded-3 p-2" />
      <h2>{props.name}</h2>
      <div className="stars">{stars}</div>
    </div>
  );
}

export default Song;