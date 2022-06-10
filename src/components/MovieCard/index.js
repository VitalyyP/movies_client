import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import LongMenu from "../LongMenu";

const CardInfo = styled(CardContent)(({ theme }) => ({
  "&: last-child": {
    paddingBottom: theme.spacing(2),
  },
}));

const MovieCard = ({ movie, onSelectClick }) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const onSelectClick = (movie) => {
  //   console.log("Click Select Movie!");
  //   setIsOpen(false);
  // };

  return (
    <Card sx={{ maxWidth: 150, position: "relative" }}>
      <LongMenu onClick={onSelectClick} action="Select" />
      {/* <LongMenu onSelectClick={onSelectClick} isOpen={isOpen} /> */}
      <CardMedia
        component="img"
        height="225"
        image={movie.image}
        alt={movie.title}
      />
      <CardInfo sx={{ textAlign: "center" }}>
        <Typography variant="h6" gutterBottom component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" component="div">
          {movie.releaseDate}
        </Typography>
      </CardInfo>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
  }).isRequired,
  onSelectClick: PropTypes.func,
};

export default MovieCard;
