import React, { useContext, useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import './Filter.css';
import { MovieContext } from '../../MovieContextProvider';

const Filter = () => {
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');
    const { applyFilters, genreOptions } = useContext(MovieContext);
    
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
                                {genreOptions.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
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