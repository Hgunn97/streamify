import React, {useEffect, useState} from "react";
import Layout from "../Components/Layout/Layout";
import Search from "../Components/Search/Search";
import {Col, Image, Row} from "react-bootstrap";
import {searchMovies} from "../api/search"
import Card from "../Components/Card/Card";

const Home = () => {
    const [movieTitle, setMovieTitle] = useState("");
    const [movie, setMovie] = useState({
        Title: "",
        Year: "",
        Plot: "",
        Poster: "",
        Genre: "",
        RunTime: "",
        Director: "",
        Awards: "",
        Rating: ""
    });
    
    const handleSearch = (movie) => {
        setMovieTitle(movie);
        
        searchMovies(movie).then(m => {
            setMovie(m)
        }).catch(error => {
            console.log(error)
        })
        
    }
    
    
    return(
        <Layout>
            <Row className="mt-5">
                <Col></Col>
                <Col xs={6}><Search submitSearch={handleSearch} /></Col>
                <Col></Col>
            </Row>
            <Row className="mt-5">
                {movie.Title !== "" ? <Col><Card movie={movie} /></Col> : <></> }
            </Row>
        </Layout>
    )
}

export default Home;