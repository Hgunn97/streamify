import React, { useContext, useEffect } from 'react';
import Layout from '../Components/Layout/Layout';
import Search from '../Components/Search/Search';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import Card from '../Components/Card/Card';
import { MovieContext } from '../MovieContextProvider';
import Filter from '../Components/Filter/Filter';

const Home = () => {
    const { movies, loading, error, handleSearch, filteredMovies, clearFilters } = useContext(MovieContext);

    const handleSubmit = async(movie) => {
        clearFilters();
        handleSearch(movie);
    }

    const renderFilteredMovies = () => {
        if(movies.length > 0 && filteredMovies.length < 1)
            return <Row>
                <p>No movies found for this filter!</p>
            </Row>
        return(
            <Row>
                {filteredMovies.map((movie, index) => (
                    <Col className="mb-3" sm={3} key={index}><Card movie={movie}/></Col>
                ))}
            </Row>
        )
    }

    return (
        <Layout>
            <Row className="mt-5">
                <Col></Col>
                <Col xs={6}><Search submitSearch={handleSubmit}/></Col>
                <Col></Col>
            </Row>
            {loading && (
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                    <Spinner animation="border" variant="light"/>
                </div>
            )}
            {error && (
                <Container className="mt-5">
                    <Alert variant="danger" className="text-center">
                        Error: {error.toString()}
                    </Alert></Container>
            )}

            {!loading && !error && movies.length > 0 &&
                <Row className="mt-5">
                    <Col sm={3}>
                        <Filter />
                    </Col>
                        <Col sm={9}>
                            {renderFilteredMovies()}
                        </Col>
                </Row>
                }
        </Layout>
    )
}

export default Home;