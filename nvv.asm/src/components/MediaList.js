import Media from "./Media";
import Medias from "../data/Medias.json";

function MediaList() {
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
          />
        );
      })}
    </div>
  );
}
export default MediaList;
