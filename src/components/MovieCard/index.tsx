import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import LongMenu from "../LongMenu";
import IMovieCard from "../../interfaces/IMovieCard.interface";

const CardInfo = styled(CardContent)(({ theme }) => ({
  "&: last-child": {
    paddingBottom: theme.spacing(2),
  },
}));

const MovieCard = ({ movie, onClick }: IMovieCard) => {

  const handleClick = (e: React.SyntheticEvent) => {
    console.log(e);
  }

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
      <a href="http://www.youtube.com/" target="_blank" title="YouTube" onClick={handleClick} rel="noreferrer">
      <CardMedia
        component="img"
        image={movie.image}
          alt={movie.title}
          id={movie.id}
        sx={{ borderRadius: "10px" }}
      />
      </a>
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

export default MovieCard;
