import React, { createContext, useEffect, useState } from 'react';
import { retrieveTrendingMovies, searchMovies } from './api/movies';
import { retrieveGenres } from './api/genres';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');
    const [genreOptions, setGenreOptions] = useState([]);

    useEffect(() => {
        if(genreOptions.length === 0){
            getGenres()
        }
        getTrendingMovies();
    }, []);

    const handleSearch = async(movie) => {
        try {
            setLoading(true);
            const movies = await searchMovies(movie);
            setMovies(movies);
            setFilteredMovies(movies);
        } catch (e) {
            setError(`Error trying to retrieve movies. ${e.message}`);
        } finally {
            setLoading(false);
        }
    }
    
    const getTrendingMovies = async () => {
        try {
            setLoading(true);
            const movies = await retrieveTrendingMovies();
            setMovies(movies);
            setFilteredMovies(movies);
        } catch (e) {
            setError(`Error trying to retrieve trending movies. ${e.message}`);
        } finally {
            setLoading(false);
        }
    }
    
    const getGenres = async() => {
        try {
            const genres = await retrieveGenres();
            setGenreOptions(genres);
        } catch (e) {
            setError(`Error trying to retrieve genres. ${e.message}`);
        }
    }
    
    const clearFilters = () => {
        setGenre('');
        setRating('');
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
        
            return filteredMovies.filter(movie => {
                return movie.genre_ids.includes(parseInt(genre))
            });
    }
    
    const filterByRating = (filteredMovies , rating) => {
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
        <MovieContext.Provider value={{ movies, loading, error, handleSearch, applyFilters, filteredMovies, clearFilters, getGenres, genreOptions, getTrendingMovies}}>
            {children}
        </MovieContext.Provider>
    )
}

export { MovieProvider, MovieContext };