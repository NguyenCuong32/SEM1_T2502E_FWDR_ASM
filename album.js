import './album.css';

function Album(props) {
  return (
    <div className="album">
      <img src={props.image} alt={props.title} className="album-cover" />
      <h2>{props.title}</h2>
      <p>{props.artist}</p>
      <p>Năm phát hành: {props.year}</p>
      <p>Bài hát: {props.songs}</p>
    </div>
  );
}

export default Album;
