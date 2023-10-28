import axios from 'axios';

const BASE_URL = 'http://www.omdbapi.com/';
const API_KEY = process.env.REACT_APP_API_KEY;

const fetchMovies = async (searchTerm) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                s: searchTerm,
                apikey: API_KEY
            }
        });

        // const response = await axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=e5bf80d7");

        if (response.data.Response === 'True') {
            // console.log(response.data);
            return response.data.Search;
        } else {
            throw new Error(response.data.Error);
        }
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw error;
    }
};

const fetchMovieById = async (id) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        i: id,
        apikey: API_KEY
      }
    });

    if (response.data.Response === 'True') {
      return response.data;
    } else {
      throw new Error(response.data.Error);
    }
  } catch (error) {
    console.error("Error fetching movie:", error);
    throw error;
  }
}
export { fetchMovies, fetchMovieById };
