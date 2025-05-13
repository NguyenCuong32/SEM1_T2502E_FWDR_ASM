import Media from "./Media";
import Medias from "../data/Medias.json";

function MediaList({ onSongSelect }) {
  return (
    <div className="row">
      {Medias.map((media) => {
        return (
          <Media
            key={media.id}
            img={media.img}
            title={media.title}
            link={media.link}
            vote={media.vote}
            onSelect={() => onSongSelect(media)}
          />
        );
      })}
    </div>
  );
}
export default MediaList;
