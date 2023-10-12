import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { searchMoviesByQuery } from 'api';
import Notiflix from 'notiflix';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchKeyword = searchParams.get('query') || '';

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      Notiflix.Notify.failure('Please enter a search query');
    } else {
      await fetchMovies(searchQuery);
    }
  };

  const fetchMovies = async (query) => {
    try {
      const searchResults = await searchMoviesByQuery(query);
      if (searchResults.length === 0) {
        Notiflix.Notify.failure('Oops, nothing was found');
      } else {
        setSearchMovies(searchResults);
        setSearchParams({ query });
        setSearchQuery('');
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      Notiflix.Notify.failure('Oops, something went wrong');
    }
  };

  useEffect(() => {
    const fetchPreviousMovies = async () => {
      if (searchKeyword) {
        try {
          const searchResults = await searchMoviesByQuery(searchKeyword);
          setSearchMovies(searchResults);
        } catch (error) {
          console.error('Error fetching previous movies:', error);
        }
      }
    };

    fetchPreviousMovies();
  }, [searchKeyword]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="searchQuery"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchMovies &&
          searchMovies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Movies;
