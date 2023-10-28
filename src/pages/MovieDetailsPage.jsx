import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/api'

function MovieDetailsPage() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  // useEffect(async () => {
  //   console.log("MDP useEffect ran");
  //   const response = fetchMovieById(id);
  //   console.log("MDP fetch response", response);
  //   setMovieDetails(response);
    
    
  // }, [id]);

  useEffect(() => {
    // console.log("MDP useEffect ran");
    async function fetchData() {
      try {
        const response = await fetchMovieById(id);
        console.log("MDP fetch response", response);
        setMovieDetails(response);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
    fetchData();
  }, [id]);

  if (!movieDetails) return <div>Loading...</div>;

  return (
    <div>
      <p>Movie Details Page</p>
      <h1>{movieDetails.Title}</h1>
      <p>{movieDetails.Plot}</p>
      <img src={movieDetails.Poster} alt={movieDetails.Title} />
      {/* Add more details as required */}
    </div>
  );
}

export default MovieDetailsPage;
