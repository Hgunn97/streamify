import api from "./axios-config";
const key = process.env.REACT_APP_API_KEY;

const searchMovies = async (search) => {
    try{
        const results = await api.get(`?t=${search}&apikey=${key}`);
        
        if(results.data !== null){
                return results.data
        }
        
        console.log("No results found")
        return null;
    } catch(error){
        console.error(`Error when trying to retrieve movie. Error: ${error.message}`, error);
        throw error;
    }
}

export { searchMovies }