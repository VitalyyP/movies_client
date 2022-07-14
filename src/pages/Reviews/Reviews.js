import { useState, useEffect } from 'react';
import { FetchMovieReviews } from '../../services/Api';

export default function Reviews({ match }) {
  const movieId = match.params.url;
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    FetchMovieReviews(movieId).then(response => {
      setReviews(response.results);
    });
  }, [movieId]);

  return reviews ? (
    <ul>
      {reviews.map(i => {
        return (
          <li key={i.id}>
            <h2>Author: {i.author}</h2>
            <p>{i.content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie.</p>
  );
}
