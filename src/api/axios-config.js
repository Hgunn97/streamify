import axios from "axios";

const axiosClient = axios.create({
    baseURL: `https://www.omdbapi.com/`
})

export default axiosClient;