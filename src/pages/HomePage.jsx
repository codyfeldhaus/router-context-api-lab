import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Movie Browser App!</h1>
      <p>Explore and discover a vast array of movies.</p>
      <Link to="/search">Start Browsing</Link>
    </div>
  );
}

export default HomePage;
