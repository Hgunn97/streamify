import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import './Filter.css';

const Filter = () => {
    const genres = ['action', 'drama', 'horror'];
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');
    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    };

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    }

    return (
        <div className="filter-container">
            <h3 className="filter-title">Filters</h3>
            <Form>
                <Row>
                    <Col>
                        <Form.Group controlId="genreSelect">
                            <Form.Label>By Genre:</Form.Label>
                            <Form.Control as="select" onChange={handleGenreChange} value={genre}>
                                <option value="">All</option>
                                {genres.map((genre, index) => (
                                    <option key={index} value={genre}>
                                        {genre}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="ratingSelect">
                            <Form.Label>By Rating:</Form.Label>
                            <Form.Control as="select" onChange={handleRatingChange} value={rating}>
                                <option value="">All</option>
                                <option value="5">5 stars and below</option>
                                <option value="6">6 stars</option>
                                <option value="7">7 stars</option>
                                <option value="8">8 stars</option>
                                <option value="9">9+ stars</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default Filter;