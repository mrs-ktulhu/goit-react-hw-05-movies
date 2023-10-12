import { NavLink, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from './MovieDetails';
import { StyledAppContainer } from './App.styled';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <StyledAppContainer>
      <header className="header-container">
        <nav>
          <NavLink className="header-link" to="/">
            Home
          </NavLink>
          <NavLink className="header-link" to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </StyledAppContainer>
  );
};
