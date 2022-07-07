import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import LongMenu from "../LongMenu";
import IMovieCardSelected from "../../interfaces/IMovieCardSelected.interface";

const MovieCardSelected = ({ movie, onClick }: IMovieCardSelected) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        position: "relative",
        maxHeight: 150,
        marginBottom: "16px",
        borderRadius: "5px",
      }}
    >
      <LongMenu onClick={() => onClick(movie)} action="Delete" />
      <CardMedia
        component="img"
        sx={{ width: 100, borderRadius: "5px" }}
        image={movie.image}
        alt={movie.title}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            variant="body1"
            align="left"
            sx={{ fontWeight: "bold" }}
          >
            {movie.title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            component="div"
            align="left"
          >
            {movie.releaseDate}
          </Typography>
        </CardContent>
        {/* <Box sx={{ alignItems: "center", pl: 2, pb: 1 }}>
          {movie.genres?.length ? (
            <Typography variant="body1" color="text.secondary" component="div">
              {movie.genres[0].name}
            </Typography>
          ) : null}
          <Typography variant="body1" color="text.secondary" component="div">
            {movie.runtime}
          </Typography>
        </Box> */}
      </Box>
    </Card>
  );
};

export default MovieCardSelected;
