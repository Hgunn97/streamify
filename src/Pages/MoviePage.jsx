import Layout from '../Components/Layout/Layout';
import Card from '../Components/Card/Card';
import { useContext } from 'react';
import { MovieContext } from '../MovieContextProvider';
import { useParams } from 'react-router-dom';

const MoviePage = () => {
    const { movies } = useContext(MovieContext);
    const { movieId } = useParams();
    const movie = movies.find(x => x.id.toString() === movieId)
    return (
        <Layout>
            {movie && (
                <Card movie={movie} />)}
        </Layout>
    )
}

export default MoviePage;