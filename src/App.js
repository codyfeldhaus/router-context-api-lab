import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import MovieDetailsPage from './pages/MovieDetailsPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { MovieProvider } from './context/MovieContext.jsx';

function App() {
  return (
    <Router>
      <MovieProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          {/* The '*' path acts as a catch-all for undefined routes */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MovieProvider>
    </Router>
  );
}

export default App;





