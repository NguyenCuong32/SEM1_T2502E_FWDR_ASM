import { useEffect, useState } from "react";
import "./container.css";
import axios from "axios";

const MusicCard = () => {
  const [album, setAlbum] = useState([]);
  const [star, setStar] = useState([1, 2, 3]);

  useEffect(() => {
    axios
      .get("https://681de77ac1c291fa6632245b.mockapi.io/employee-2")
      .then((response) => {
        setAlbum(response.data);
      })
      .catch((error) => {
        console.error("Error fetching album:", error);
      });
  }, []);
  return (
    <>
      <div className="music-card">
        <audio controls style={{ width: "100%" }}>
          <source
            src="Sỹ Nguyên - beat  yourr lui viton.mp3 "
            type="audio/mpeg"
          />
        </audio>
        <div className="music-content">
          <div className="lyrics-content">
            <img
              src="https://media.istockphoto.com/id/1076582642/vector/eighth-note-drawn-by-hand-with-rough-brush-music-icon-symbol-logo-sketch-graffiti-grunge.jpg?s=612x612&w=0&k=20&c=XLL1sec-tAcWXdYxWIGjI2hG7ffolmgjsGCkS2CtZtk="
              className="music-title"
            />
            <p>Take me to your heart</p>
          </div>
          <div className="music-lyrics">
            <p>Take me to your heart, take me to your soul</p>
            <p>Give me your hand before I'm old</p>
            <p>Show me what love is, haven't got a clue</p>
            <p>Show me that wonders can be true</p>
          </div>
        </div>
      </div>
      <div className="container-album">
        {album.map((item, index) => {
          return (
            <div className="container-album-item" key={index}>
              <img
                src={item.img}
                alt="album"
                className="container-album-item-img"
              />
              <div className="container-album-item-name">{item.name_music}</div>
              <div className="container-album-item-star">
                {star.map((item, index) => {
                  return (
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUVJvtZSnGjM0QactZ76BZpXKknPsXNjuN6w&s"
                      alt=""
                      className="container-album-item-star-img"
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MusicCard;
