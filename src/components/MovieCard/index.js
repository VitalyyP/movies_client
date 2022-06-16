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

const MovieCard = ({ movie, onClick }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        // maxHeight: 450,
        position: "relative",
        borderRadius: "10px",
      }}
    >
      <LongMenu onClick={() => onClick(movie)} action="Select" />
      <CardMedia
        component="img"
        image={movie.image}
        alt={movie.title}
        sx={{ borderRadius: "10px" }}
      />
      <CardInfo sx={{ textAlign: "center" }}>
        <Typography
          variant="body1"
          gutterBottom
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          {movie.title}
        </Typography>
        <Typography variant="body1" component="div">
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
  onClick: PropTypes.func,
};

export default MovieCard;
