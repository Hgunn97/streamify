import api from './axios-config';

const key = process.env.REACT_APP_API_KEY;

const searchMovies = async(search) => {
    try {
        const results = await api.get(`/search/movie?query=${search}&api_key=${key}`);

        if (results.data !== null) {
            return results.data.results.filter(x => x.original_language === 'en')
        }

        return null;
    } catch (error) {
        console.error(`Error when trying to search for movie. Error: ${error.message}`, error);
        throw error;
    }
}

const retrieveTrendingMovies = async () => {
    try {
        const results = await api.get(`trending/all/week?language=en-US&api_key=${key}`);
        
        if(results.data !== null){
            console.log(results.data)
            return results.data.results;
        }
    } catch (error) {
        console.error(`Error when trying to retrieve trending movies. Error: ${error.message}`, error);
        throw error;
    }
}

export { searchMovies, retrieveTrendingMovies }