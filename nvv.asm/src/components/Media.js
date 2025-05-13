import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Media.css";

function Media(props) {
  const handlePlayClick = () => {
    props.onSelect();
  };
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div>
        <Card className="card-media h-100">
          <Card.Img
            variant="top"
            src={props.img}
            alt={props.title}
            className="media-img"
            style={{ height: "200px", objectFit: "cover" }}
            onClick={handlePlayClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === " " && handlePlayClick()}
          />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>Votes: {props.vote}</Card.Text>{" "}
            <Button variant="primary" onClick={handlePlayClick}>
              Play
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default Media;
