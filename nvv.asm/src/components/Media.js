import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./Media.css";

function Media(props) {
  return (
    <div className="col-md-3 mb-3">
      <Card className="card-media h-100">
        <Card.Img
          variant="top"
          src={props.img}
          alt={props.title}
          className="media-img"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>Votes: {props.vote}</Card.Text>{" "}
          <audio controls src={props.link} style={{ width: "100%" }} />
        </Card.Body>
      </Card>
    </div>
  );
}
export default Media;
