import React, { useState, useEffect } from 'react';
import { useParams, useLocation, NavLink, Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'api';
import { Additionalnfo, Container, Image, InfoContainer, InfoList } from './MovieDetails.styled';

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
    <>
      <NavLink to={previousPage}> ← Go back</NavLink>
      <>
        {movie && (
          <Container>
            <div>
              <Image
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <InfoContainer>
              <InfoList>
                <h2>
                  {movie.title}({new Date(movie.release_date).getFullYear()})
                </h2>
                <li>
                  <p>User Score: {Math.round(movie.vote_average * 10) || 0}%</p>
                </li>
                <li>
                  <h3>Overviev</h3>
                  {movie.overview}
                </li>
                <li>
                  <h4>Genres</h4>
                  {movie.genres.map(genre => genre.name).join(', ')}
                </li>
              </InfoList>
            </InfoContainer>
          </Container>
        )}
        <Additionalnfo>
          <p>Additional information</p>
          <ul>
            <li>
            <Link to="cast">Cast</Link>
            </li>
            <li>
            <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </Additionalnfo>
        <Outlet/>
      </>
    </>
  );
};

export default MovieDetails;
