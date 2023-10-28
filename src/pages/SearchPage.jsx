import React from 'react';
import SearchBar from '../components/SearchBar.jsx';
import MovieList from '../components/MovieList.jsx';

function SearchPage() {
  return (
    <div>
      <h1>Search for Movies</h1>
      <SearchBar />
      <MovieList />
    </div>
  );
}

export default SearchPage;
