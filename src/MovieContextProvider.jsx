import React, {createContext, useState} from "react";
import {searchMovies} from "./api/search";

const MovieContext = createContext();

const MovieProvider = ({children}) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const handleSearch = async (movie) => {
        try {
            setLoading(true);
            const movies = await searchMovies(movie);
            console.log(movies)
            setMovies(movies);
        }
        catch (e) {
            setError(e.message);
        }finally {
            setLoading(false);
        }
    }
    
    return(
        <MovieContext.Provider value={{movies, loading, error, handleSearch}} >
            {children}
        </MovieContext.Provider>
    )
}

export { MovieProvider, MovieContext };