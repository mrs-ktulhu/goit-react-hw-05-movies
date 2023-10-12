import React, { lazy, Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { StyledAppContainer } from './App.styled';

const Home = lazy(() => import('pages/Home')); 
const Movies = lazy(() => import('pages/Movies')); 
const MovieDetails = lazy(() => import('./MovieDetails')); 
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews')); 

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};
