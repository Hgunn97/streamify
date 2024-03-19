import React, {useContext} from "react";
import Layout from "../Components/Layout/Layout";
import Search from "../Components/Search/Search";
import {Col, Row} from "react-bootstrap";
import Card from "../Components/Card/Card";
import { MovieContext } from "../MovieContextProvider";

const Home = () => {
    const {movies, loading, error, handleSearch} = useContext(MovieContext);
    
    const handleSubmit = async (movie) => {
        handleSearch(movie);
    }
    
    
    return(
        <Layout>
            <Row className="mt-5">
                <Col></Col>
                <Col xs={6}><Search submitSearch={handleSubmit} /></Col>
                <Col></Col>
            </Row>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <Row className="mt-5">
                {movies.map((movie, index) => (
                    <Col><Card key={index} movie={movie} /></Col>
                    ))}
            </Row>
        </Layout>
    )
}

export default Home;