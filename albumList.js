import Album from "./album";
import AlbumData from "../Data/album.json";
function AlbumList() {
    return (
        <div className="album-list">
            {AlbumData.map((album) => (
                <Album
                    key={album.id}
                    image= {album.image}
                    title= {album.title}
                    artist= {album.artist}
                    year= {album.year}
                    songs= {album.songs}
                />
            ))}
        </div>
    );
}
export default AlbumList;