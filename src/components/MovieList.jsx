import React, { useEffect, useState, useContext } from 'react';
import MovieItem from './MovieItem';
import { MovieContext } from '../context/MovieContext';
import { fetchMovies } from '../services/api'; 

function MovieList() {
  const [movies, setMovies] = useState([]);
  const { searchTerm } = useContext(MovieContext);

  useEffect(() => {
    const getMovies = async () => {
      // console.log("getMovies ran");
      try {
        const data = await fetchMovies(searchTerm);
        // console.log("search data", data)
        setMovies(data || []);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    if (searchTerm) {
      getMovies();
    }
  }, [searchTerm]);

  return (
    <div>
      {movies.map(movie => (
        <MovieItem key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
