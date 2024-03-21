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
        let updatedMovies = [...movies];

        let ratingUpdate = selectedRating !== null ? selectedRating : rating;
        let genreUpdate = selectedGenre || selectedGenre === "" ? selectedGenre : genre;

        updatedMovies = filterByRating(updatedMovies, ratingUpdate);
        updatedMovies = filterByGenre(updatedMovies, genreUpdate);

        setRating(ratingUpdate);
        setGenre(genreUpdate);

        setFilteredMovies(updatedMovies);
    }
    
    const filterByGenre = (filteredMovies, genre) => {
        if(!genre) return filteredMovies;
        
        console.log("Current genre" + genre)
            return filteredMovies.filter(movie => {
                return movie.genre_ids.includes(parseInt(genre))
            });
    }
    
    const filterByRating = (filteredMovies , rating) => {
        console.log("Current rating" + rating);
        if(!rating) return filteredMovies;
        
        let myRating = parseInt(rating)
        
        return filteredMovies.filter(movie => {
            let maxRating = myRating + 1;

            if(myRating === 5){
                return movie.vote_average < 6;
            }
            else{
                return movie.vote_average >= myRating && movie.vote_average < maxRating;
            }
        })
    }

    return (
        <MovieContext.Provider value={{ movies, loading, error, handleSearch, applyFilters, filteredMovies }}>
            {children}
        </MovieContext.Provider>
    )
}

export { MovieProvider, MovieContext };