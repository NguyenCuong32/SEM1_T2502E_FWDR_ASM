import React from "react";
import "./fpt.css";

const songs = [
  { title: "Take me to your heart", stars: 3, img: "https://backstage.vn/storage/2023/10/Son-Tung-M-TP-chinh-thuc-quay-tro-lai-Vietnam-Idol-2023-sau-9-nam-e1697374758118.jpg" },
  { title: "My love", stars: 4, img: "https://backstage.vn/storage/2023/10/Son-Tung-M-TP-chinh-thuc-quay-tro-lai-Vietnam-Idol-2023-sau-9-nam-e1697374758118.jpg" },
  { title: "Cry on my shoulder", stars: 4, img: "https://backstage.vn/storage/2023/10/Son-Tung-M-TP-chinh-thuc-quay-tro-lai-Vietnam-Idol-2023-sau-9-nam-e1697374758118.jpg" },
  { title: "Breathless", stars: 3, img: "https://backstage.vn/storage/2023/10/Son-Tung-M-TP-chinh-thuc-quay-tro-lai-Vietnam-Idol-2023-sau-9-nam-e1697374758118.jpg" },
  { title: "Until You", stars: 5, img: "https://backstage.vn/storage/2023/10/Son-Tung-M-TP-chinh-thuc-quay-tro-lai-Vietnam-Idol-2023-sau-9-nam-e1697374758118.jpg" },
  ...Array(10).fill({ title: "Take me to your heart", stars: 4, img: "https://backstage.vn/storage/2023/10/Son-Tung-M-TP-chinh-thuc-quay-tro-lai-Vietnam-Idol-2023-sau-9-nam-e1697374758118.jpg" })
];

const FptList = () => {
  return (
    <div className="grid">
      {songs.map((song, index) => (
        <div className="card" key={index}>
          <img src={song.img} alt={song.title} />
          <div className="card-title">{song.title}</div>
          <div className="stars">{"★".repeat(song.stars)}{"☆".repeat(5 - song.stars)}</div>
        </div>
      ))}
    </div>
  );
};

export default FptList;
