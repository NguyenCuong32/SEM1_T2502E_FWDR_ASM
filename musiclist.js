
import Music from './music';
import musicData from '../Data/music.json';

function MusicList() {
  return (
    <div className="music-list">
      {musicData.map((music) => (
        <Music
          key={music.id}
          title={music.title}
          src={music.src}
          image={music.image}
          rating={music.rating}
        />
      ))}
    </div>
  );
}

export default MusicList;
