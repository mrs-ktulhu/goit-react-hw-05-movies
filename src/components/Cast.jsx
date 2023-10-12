import { getMovieCast } from 'api';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const details = await getMovieCast(movieId);
        setCasts(details);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      <ul>
        {casts.map(cast => (
          <li key={cast.cast_id}>
            <p>{cast.name}</p>
            <img
              src={`https://image.tmdb.org/t/p/w138_and_h175_face${cast.profile_path}`}
              alt={cast.name}
            />
            <p>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
