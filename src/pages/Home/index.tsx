import { useState } from "react";
import { Box, Grid, Paper, styled } from "@mui/material";
import { useQuery } from "@apollo/client";
import Pagination from "@mui/material/Pagination";

import MovieCard from "../../components/MovieCard";
import MovieCardSelected from "../../components/MovieCardSelected";
import { moviesQuery } from "./queries";
import useMovies from "../../hooks/useMovies";
import IMovie from "../../interfaces/IMovie.interface";
import IValues from "../../interfaces/IValues.interface";
import SelectedMoviesForm from "../../components/SelectedMoviesForm";

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginTop: "42px",
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "calc(100vh - 58px)",
  position: "sticky",
  top: theme.spacing(2),
}));

type Props = {
  listName?: string;
  children?: React.ReactNode;
};

const Home = () => {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(moviesQuery, {
    variables: { page },
  });

  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

  // const onSubmit = (event: React.FormEvent<HTMLInputElement>) => {
  // console.log(selectedMovies);
  // console.log("event: ", event);
  // console.log({ listName });
  const onSubmit = ({ listName }: Props) => {
    console.log({ listName });
    const ids = selectedMovies.map(({ id }) => id);
    const link = `${
      window.location.host
    }/recommend?title=${listName}&ids=${ids.join()}`;
  };

  const paginationHandler = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
  };

  if (error) {
    return <h1>Something doesn't work</h1>;
  }

  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper>Filter section</Paper>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Pagination
                count={500}
                page={page}
                onChange={paginationHandler}
              />
            </Box>
            <Paper sx={{ margin: "10px 0" }}>
              <Box sx={{ flexGrow: 1, padding: 1 }}>
                {loading && "Loading..."}
                {data && (
                  <Grid
                    container
                    spacing={2}
                    sx={{ justifyContent: "space-between" }}
                  >
                    {data.movies.results.map((movie: IMovie) => (
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                        lg={2.4}
                        key={movie.id}
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <MovieCard movie={movie} onClick={selectMovie} />
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Box>
            </Paper>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Pagination
                count={500}
                page={page}
                onChange={paginationHandler}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SelectedMovies sx={{ overflow: "auto" }}>
              {/* {selectedMovies.length && ( */}
              {selectedMovies.map((movie) => (
                <Grid key={movie.id}>
                  <MovieCardSelected movie={movie} onClick={deleteMovie} />
                </Grid>
              ))}
              {/* )} */}
              <SelectedMoviesForm onSubmit={onSubmit} />
            </SelectedMovies>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
