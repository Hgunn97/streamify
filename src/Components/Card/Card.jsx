import { Card, CardBody, CardTitle, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const { original_title, release_date, poster_path, id } = movie;
    const poster = 'https://image.tmdb.org/t/p/original' + poster_path;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img src={poster} />
            <CardBody>
                <CardTitle>{original_title}</CardTitle>
            </CardBody>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Year: {release_date}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Link to={'/' + id}>View</Link>
            </Card.Body>
        </Card>
    )
}

export default MovieCard;