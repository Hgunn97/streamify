import React, { createContext, useState } from 'react';
import { searchMovies } from './api/search';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');

    const handleSearch = async(movie) => {
        try {
            setLoading(true);
            const movies = await searchMovies(movie);
            console.log(movies)
            setMovies(movies);
            setFilteredMovies(movies);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }
    
    const applyFilters = (selectedGenre, selectedRating) => {
        let filteredMovies = [...movies];
        
        if(selectedRating) {
            console.log(selectedRating)
            switch (selectedRating) {
                case "5":
                    filteredMovies = filteredMovies.filter(movie => movie.vote_average < 6);
                    break;
                case "6":
                    filteredMovies = filteredMovies.filter(movie => movie.vote_average >= 6 && movie.vote_average < 7);
                    break;
                case "7":
                    filteredMovies = filteredMovies.filter(movie => movie.vote_average >= 7 && movie.vote_average < 8);
                    break;
                case "8":
                    filteredMovies = filteredMovies.filter(movie => movie.vote_average >= 8 && movie.vote_average < 9);
                    break;
                case "9":
                    filteredMovies = filteredMovies.filter(movie => movie.vote_average >= 9);
                    break;
                default:
                    break;
            }
        }
        
        console.log(filteredMovies);
        setFilteredMovies(filteredMovies);
    }

    return (
        <MovieContext.Provider value={{ movies, loading, error, handleSearch, applyFilters, filteredMovies }}>
            {children}
        </MovieContext.Provider>
    )
}

export { MovieProvider, MovieContext };