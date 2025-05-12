import Song from "./song.js"
import songs from "../data/songs.json"
import "./songList.css"

function SongList() {
    return (
        <div className="container">
            <div className="row">
                {songs.map((song) => (
                    <div className="col-md-3 g-5" key={song.id}>
                        <Song
                            key={song.id}
                            name={song.name}
                            image={song.image}
                            rating={song.rating}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SongList;