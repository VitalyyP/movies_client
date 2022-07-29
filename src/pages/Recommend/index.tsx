import { useSearchParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Box, Grid, Paper, styled } from "@mui/material";
import { useQuery } from "@apollo/client";

import { moviesByIdsQuery } from "./queries";
import IMovie from "../../interfaces/IMovie.interface";
import MovieCard from "../../components/MovieCard";

type Id = string | number;

const Recommend = () => {
  const [searchParams] = useSearchParams();

  const { loading, error, data } = useQuery(moviesByIdsQuery, {
    variables: {
      ids: searchParams
        .get("ids")
        ?.split(",")
        .map((id: Id) => Number(id)),
    },
  });

  if (loading) {
    <div>Loading...</div>;
  }

  if (error) {
    <div>Error. Try again!</div>;
  }

  return (
    <>
      <Paper sx={{ margin: "10px 0" }}>
        <Typography variant="h2" component="h2" gutterBottom>
          {searchParams.get("title")}
        </Typography>
      </Paper>
      <Paper sx={{ margin: "10px 0" }}>
        <Box sx={{ flexGrow: 1, padding: 1 }}>
          {loading && "Loading..."}
          {data && (
            <Grid container spacing={2} sx={{ justifyContent: "left" }}>
              {data.moviesByIds.map((movie: IMovie) => (
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
                  <MovieCard movie={movie} onClick={() => {}} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Paper>
    </>
  );
};

export default Recommend;
