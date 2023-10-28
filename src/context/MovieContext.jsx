import React, { createContext, useEffect, useState } from 'react';

export const MovieContext = createContext();


export function MovieProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // console.log("searchTerm changed:", searchTerm);
  }, [searchTerm]);

  return (
    <MovieContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </MovieContext.Provider>
  );
}
