import React, { useState, useEffect } from 'react';
import { getMovieReviews } from 'api';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      const reviews = await getMovieReviews(movieId);
      setReviews(reviews);
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 ? (
        <p>We dont have any reviews for this movie.</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
