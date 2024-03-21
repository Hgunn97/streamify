import api from './axios-config';

const key = process.env.REACT_APP_API_KEY;

const searchMovies = async(search) => {
    try {
        const results = await api.get(`/search/movie?query=${search}&api_key=${key}`);

        if (results.data !== null) {
            const myResults = results.data.results.filter(x => x.original_language === 'en')
            return myResults;
        }

        return null;
    } catch (error) {
        console.error(`Error when trying to retrieve movie. Error: ${error.message}`, error);
        throw error;
    }
}

export { searchMovies }