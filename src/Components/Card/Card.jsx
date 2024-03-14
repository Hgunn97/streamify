import {Card, CardBody, CardLink, CardText, CardTitle, ListGroup} from "react-bootstrap";


const MovieCard = ({movie}) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img src={movie.Poster} />
            <CardBody>
                <CardTitle>{movie.Title}</CardTitle>
                <CardText>{movie.Plot}</CardText>
            </CardBody>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Year: {movie.Year}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <CardLink href={"/" + movie.Title}>View Movie</CardLink>
            </Card.Body>
        </Card>
    )
}

export default MovieCard;