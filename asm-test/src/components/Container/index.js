import "./container.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = () => {
  const [albums, setAlbums] = useState([]);
  const [star, setStar] = useState([1, 2, 3]);

  useEffect(() => {
    axios
      .get("https://681b62c817018fe5057b5536.mockapi.io/api/v1/band")
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error("Error fetching albums:", error);
      });
  }, []);

  return (
    <div className="container">
      <div className="container__music">
        <audio controls style={{ width: "100%" }}>
          <source
            src="../../audio/MienDatHuaVietnameseConcertEdition-HoangThuyLinhDen-16585278.mp3"
            type="audio/mpeg"
          />
          <source
            src="../../audio/MienDatHuaVietnameseConcertEdition-HoangThuyLinhDen-16585278.mp3"
            type="audio/ogg"
          />
          Trình duyệt của bạn không hỗ trợ audio.
        </audio>
        <div className="container__music-info">
          <div className="container__music-info-name">
            <img
              src="https://png.pngtree.com/element_our/sm/20180415/sm_5ad31d9b53530.jpg"
              alt=""
              style={{ width: 30, height: 30 }}
            />
            <p className="container__music-info-name-title">
              Take me to your heart
            </p>
          </div>
          <div className="container__music-info-lyrics">
            <p className="container__music-info-lyrics-title">
              Take me to your heart, take me to your soul
            </p>
            <p className="container__music-info-lyrics-title">
              Give me your hand before i'm old
            </p>
            <p className="container__music-info-lyrics-title">
              Show me what love is, haven't got a clue
            </p>
            <p className="container__music-info-lyrics-title">
              Show me that wonder can't be true
            </p>
          </div>
        </div>
      </div>
      <div className="container__album">
        {albums.map((item, index) => {
          return (
            <div className="container__album-item" key={index}>
              <img
                src={item.image}
                alt="album"
                className="container__album-item-img"
              />
              <div className="container__album-item-name">{item.name}</div>
              <div className="container__album-item-star">
                {star.map((item, index) => {
                  return (
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Rc4fNjla_QW6aD7V8JZxgoqT0LkRUtwTQg&s"
                      alt="star"
                      className="container__album-item-star-img"
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
