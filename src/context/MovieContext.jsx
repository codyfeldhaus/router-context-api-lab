import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <MovieContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </MovieContext.Provider>
  );
}