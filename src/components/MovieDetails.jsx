import React, { useState, useEffect } from 'react';
import { useParams, useLocation, NavLink } from 'react-router-dom';
import { getMovieDetails } from 'api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const [previousPage] = useState(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const details = await getMovieDetails(movieId);
        setMovie(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }

    };

    fetchMovieData();
  }, [movieId]);

  return (
    <div>
      <NavLink to={previousPage}>
        Go back
      </NavLink>
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div>
            <ul>
              <h2>{movie.title}({new Date(movie.release_date).getFullYear()})</h2>
              <li>
                <p>
                  <span>User Score:</span> 
                  {Math.round(movie.vote_average * 10) || 0}%
                </p>
              </li>
              <li>
                <span>Overviev:</span>{' '}
                 {movie.overview}
              </li>
              <li>
                <p>
                  <span>Genres:</span>{' '}
                  {movie.genres.map((genre) => genre.name).join(', ')}
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
