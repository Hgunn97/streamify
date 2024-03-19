import {Card, CardBody, CardTitle, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";


const MovieCard = ({movie}) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img src={movie.Poster} />
            <CardBody>
                <CardTitle>{movie.Title}</CardTitle>
            </CardBody>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Year: {movie.Year}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Link to={"/" + movie.Title}>View</Link>
            </Card.Body>
        </Card>
    )
}

export default MovieCard;