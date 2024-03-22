import api from './axios-config';

const key = process.env.REACT_APP_API_KEY;

const retrieveGenres = async () => {
    try {
        const results = await api.get(`/genre/movie/list?language=en&api_key=${key}`);

        if (results.data !== null) {
            return results.data.genres;
        }
    } catch (error){
        console.error(`Error when trying to retrieve genres. Error: ${error.message}`, error);
        throw error;
    }
}

export {retrieveGenres}