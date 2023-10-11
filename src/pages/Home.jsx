import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPopularMovies } from 'api';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    const movies = await getPopularMovies();
    setPopularMovies(movies);
  };

  return (
    <div >
      <h1 >Trending Movies</h1>
      <ul >
        {popularMovies.map((movie) => (
          <li key={movie.id} >
            <Link to={`/movies/${movie.id}`}>
              <p>{(movie.title)}</p>
            </Link>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
