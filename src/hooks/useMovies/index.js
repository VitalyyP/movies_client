import { useState, useCallback } from "react";
import { MAX_SELECTED_MOVIES } from "../../config";

const useMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const selectMovie = useCallback(
    (movie) => {
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
    (movie) => {
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
