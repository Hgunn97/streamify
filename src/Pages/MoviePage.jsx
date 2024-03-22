import Layout from '../Components/Layout/Layout';
import { useContext } from 'react';
import { MovieContext } from '../MovieContextProvider';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const MoviePage = () => {
    const { movies } = useContext(MovieContext);
    const { movieId } = useParams();
    const movie = movies.find(x => x.id.toString() === movieId)
    const { original_title, release_date, poster_path, overview } = movie;
    const poster = 'https://image.tmdb.org/t/p/original' + poster_path;
    
    return (
        <Layout>
            {movie && (
                <Container>
                    <Row><Col sm={5}>
                        <img style={{width: "100%"}} src={poster}/>
                    </Col>
                    <Col className="d-flex align-items-center">
                        <Row>
                            <Row><h1>{original_title}</h1></Row>
                            <Row><p>Plot: {overview}</p></Row>
                            <Row><p>Year: {release_date}</p></Row>
                        </Row>
                    </Col>
                    </Row>
                </Container>
                )}
        </Layout>
    )
}

export default MoviePage;