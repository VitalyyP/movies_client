import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PropTypes from "prop-types";

import LongMenu from "../LongMenu";

const MovieCardSelected = ({ movie, onClick }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        position: "relative",
        maxHeight: 150,
        margin: "16px 0",
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
        <Box sx={{ alignItems: "center", pl: 2, pb: 1 }}>
          {movie.genres?.length ? (
            <Typography variant="body1" color="text.secondary" component="div">
              {movie.genres[0].name}
            </Typography>
          ) : null}
          <Typography variant="body1" color="text.secondary" component="div">
            {movie.runtime}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

MovieCardSelected.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
    runtime: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func,
};

export default MovieCardSelected;
