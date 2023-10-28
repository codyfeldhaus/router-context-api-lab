import React, { useState, useContext, useEffect } from 'react';
import { MovieContext } from '../context/MovieContext';

function SearchBar() {
  const [query, setQuery] = useState('');
  const { setSearchTerm } = useContext(MovieContext);

  const handleSubmit = (e) => {
    console.log("SearchBar handleSubmit ran");
    e.preventDefault();
    setSearchTerm(query);
  };

  useEffect(() => {
    console.log('query changed', query);
  }, [query])
  

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
