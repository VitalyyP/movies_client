import { useState, useEffect } from 'react';
import { FetchMovieCast } from '../../services/Api';
import s from './Cast.module.css';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

export default function Cast({ match }) {
  const movieId = match.params.url;
  const [cast, setCast] = useState(null);

  useEffect(() => {
    FetchMovieCast(movieId).then(response => {
      setCast(response.cast);
    });
  }, [movieId]);

  return (
    cast && (
      <ul className={s.list}>
        {cast.map(i => {
          return (
            <li key={i.id} className={s.item}>
              {i.profile_path ? (
                <img src={`${IMAGE_URL}${i.profile_path}`} alt={i.name} />
              ) : (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                  alt="Not found"
                  width={200}
                />
              )}
              <p>{i.name}</p>
              <p>{i.character}</p>
            </li>
          );
        })}
      </ul>
    )
  );
}
