import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import LongMenu from "../LongMenu";

const CardInfo = styled(CardContent)(({ theme }) => ({
  "&: last-child": {
    paddingBottom: theme.spacing(2),
  },
}));

const MovieCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onSelectClick = (movie) => {
    console.log("Click Select Movie!");
    setIsOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 150, position: "relative" }}>
      <LongMenu onSelectClick={onSelectClick} isOpen={isOpen} />
      <CardMedia
        component="img"
        height="225"
        image="https://www.themoviedb.org/t/p/w220_and_h330_face/20goiZ0LvU3Oqmg2fsl8jDEPYd7.jpg"
        alt="Paella dish"
      />
      <CardInfo sx={{ textAlign: "center" }}>
        <Typography variant="h6" gutterBottom component="div">
          Обі-Ван Кенобі
        </Typography>
        <Typography variant="body2" component="div">
          26 трав. 2022
        </Typography>
      </CardInfo>
    </Card>
  );
};

export default MovieCard;
