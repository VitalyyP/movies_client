import { useState, useCallback } from "react";
import { MAX_SELECTED_MOVIES } from "../../const";
import IMovie from "../../interfaces/IMovie.interface";

const useMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState<IMovie[]>([]);

  const selectMovie = useCallback(
    (movie: IMovie) => {
      const length = selectedMovies.length;
      const isNewSelectedMovie = !selectedMovies.find(
        ({ id }) => id === movie.id
      );

      if (isNewSelectedMovie && length < MAX_SELECTED_MOVIES) {
        setSelectedMovies([movie, ...selectedMovies]);
      }
    },
    [selectedMovies]
  );

  const deleteMovie = useCallback(
    (movie: IMovie) => {
      setSelectedMovies(selectedMovies.filter(({ id }) => id !== movie.id));
    },
    [selectedMovies]
  );

  return {
    selectedMovies,
    selectMovie,
    deleteMovie,
  };
};

export default useMovies;
