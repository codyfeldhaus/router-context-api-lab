import React from 'react';
import { Link } from 'react-router-dom';

function MovieItem({ movie }) {
  return (
    <div className="movie-item">
      <h3>{movie.Title}</h3>
      <img src={movie.Poster} alt={movie.Title} />
      <p>Year: {movie.Year}</p>
      <Link to={`/movie/${movie.imdbID}`}>Details</Link>
    </div>
  );
}

export default MovieItem;
