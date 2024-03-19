import Layout from "../Components/Layout/Layout";
import Card from "../Components/Card/Card";
import {useContext} from "react";
import {MovieContext} from "../MovieContextProvider";
import {useParams} from "react-router-dom";


const MoviePage = () => {
    const {movies} = useContext(MovieContext);
    const {movieId} = useParams();
    console.log("Movies:", movies);
    console.log("Movie ID:", movieId)
    const movie = movies.find(x => x.Title === movieId)
    return(
        <Layout>
            {movie && (
            <Card movie={movie}/>)}
        </Layout>
    )
}

export default MoviePage;