import React, { useContext, useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import './Filter.css';
import { MovieContext } from '../../MovieContextProvider';

const Filter = () => {
    const genres = ['action', 'drama', 'horror'];
    const genres2 = {28: 'action', 18: 'drama', 27: 'horror', 12: 'adventure'};
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');
    const { applyFilters } = useContext(MovieContext);
    const handleGenreChange = (e) => {
        const selectedGenre = e.target.value;
        setGenre(selectedGenre);
        applyFilters(selectedGenre, null);
    };

    const handleRatingChange = (e) => {
        const selectedRating = e.target.value;
        setRating(selectedRating);
        applyFilters(null, selectedRating);
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
                                {Object.entries(genres2).map(([key, value]) => (
                                    <option key={key} value={key}>
                                        {value}
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