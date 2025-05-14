import MusicCard from "./MusicCard";

const MusicGrid = ({ songs, onSelectSong }) => {
  return (
    <div className="music-grid">
      {songs.map((song) => (
        <MusicCard key={song.id} song={song} onSelectSong={onSelectSong} />
      ))}
    </div>
  );
};

export default MusicGrid;
