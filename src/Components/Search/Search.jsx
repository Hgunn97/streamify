import { Button, Form, Stack } from 'react-bootstrap';
import { useState } from 'react';

const Search = ({ submitSearch }) => {
    const [movie, setMovie] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        submitSearch(movie)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Stack direction="horizontal" gap={1}>
                <Form.Control as="input" placeholder="Search" value={movie} name="movie"
                              onChange={(e) => setMovie(e.target.value)}/>
                <Button type="submit">Search</Button>
            </Stack>
        </Form>
    )
}

export default Search;