import { useState } from "react";
import { Box, Grid, Paper, styled } from "@mui/material";
import { useQuery } from "@apollo/client";
import Pagination from "@mui/material/Pagination";

import MovieCard from "../../components/MovieCard";
import MovieCardSelected from "../../components/MovieCardSelected";
import { moviesQuery } from "./queries";
import useMovies from "../../hooks/useMovies";

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

const Home = () => {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(moviesQuery, {
    variables: { page },
  });

  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

  const paginationHandler = (event, page) => {
    setPage(page);
  };

  if (error) {
    return "Error";
  }

  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper>Filter section</Paper>
          </Grid>
          <Grid item xs={12} md={8}>
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
                  <Grid container spacing={2}>
                    {data.movies.results.map((movie) => (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
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
                // count={Math.ceil(data?.movies?.totalPages / 3)}
                page={page}
                onChange={paginationHandler}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <SelectedMovies>
              {/* {selectedMovies.length && ( */}
              {selectedMovies.map((movie) => (
                <Grid key={movie.id}>
                  <MovieCardSelected movie={movie} onClick={deleteMovie} />
                </Grid>
              ))}
              {/* )} */}
            </SelectedMovies>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
