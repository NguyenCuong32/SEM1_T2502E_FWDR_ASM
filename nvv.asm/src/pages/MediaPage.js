import MediaList from "../components/MediaList";
function MediaPage({ onSongSelect }) {
  return (
    <div className="container mt-4">
      <MediaList onSongSelect={onSongSelect} />
      <MediaList onSongSelect={onSongSelect} />
    </div>
  );
}
export default MediaPage;
