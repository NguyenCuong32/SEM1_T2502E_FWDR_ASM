import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Media.css";

function Media(props) {
  return (
    <div className="col-md-3 mb-3">
      <Card className="card-media">
        <audio
          controls
          src={props.audio}
          className="media-audio"
          style={{ width: "100%" }}></audio>
        <Card.Img
          variant="top"
          src={props.img}
          alt={props.title}
          className="media-img"
          style={{ height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>Votes: {props.vote}</Card.Text>{" "}
          <Button
            variant="primary"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer">
            {" "}
            Go to Media
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Media;
