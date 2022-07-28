import { useState, useEffect, Suspense } from "react";
// import { Switch, Route } from "react-router-dom";
// import { useQuery } from "@apollo/client";

// import { movieDetailsQuery } from "../Home/queries";

// import Cast from "../Cast";
// import Reviews from "../Reviews";
// import Button from "../../components/Button";
// import { Link } from "react-router-dom";
// import s from "./MovieDetailsPage.module.css";

// const IMAGE_URL = "https://image.tmdb.org/t/p/w400";

// const MovieDetailsPage = ({ match, history, location }) => {
//   const [movie, setMovie] = useState(null);
//   const movieId = match.params.url;

//   const MovieDetailsPage = () => {
//     const { loading, error, data } = useQuery(movieDetailsQuery);
//     console.log(data);
//     // useEffect(() => {
//     //   FetchMovieDetails(movieId).then(response => {
//     //     setMovie(response);
//     //     console.log(response);
//     //   });

//     //   return () => {};
//     // }, [movieId]);

//     // const goBack = () => {
//     //   history.push(location?.state?.from ?? '/');
//     // };

//     return (
//       // movie && (
//       //   <div className={s.containerWithPadding}>
//       //     <Button handleClick={goBack} />

//       //     <div className={s.container}>
//       //       <img
//       //         src={`${IMAGE_URL}${movie.poster_path}`}
//       //         alt={movie.title}
//       //         width="360"
//       //         height="480"
//       //       />
//       //       <div className={s.containerWithPadding}>
//       //         <h1>{movie.title}</h1>
//       //         <p>User score: {movie.vote_average}</p>
//       //         <h2>Overview</h2>
//       //         <p>{movie.overview}</p>
//       //         <div className={s.genres}>
//       //           <h2>Genres: </h2>
//       //           <ul className={s.list}>
//       //             {movie.genres.map(i => {
//       //               return (
//       //                 <li className={s.item} key={i.id}>
//       //                   {i.name}
//       //                 </li>
//       //               );
//       //             })}
//       //           </ul>
//       //         </div>
//       //       </div>
//       //     </div>
//       //     <hr />
//       <h3>Additional information</h3>
//       //   <ul>
//       //     <li>
//       //       <Link to={`${match.url}/cast`}>Cast</Link>
//       //     </li>
//       //     <li>
//       //       <Link to={`${match.url}/reviews`}>Reviews</Link>
//       //     </li>
//       //   </ul>
//       //   <hr />
//       //   <Suspense fallback={<h1>Загрузка дополнительной информации о фильме...</h1>}>
//       //     <Switch>
//       //       <Route path={`${match.path}/cast`} component={Cast}></Route>
//       //       <Route path={`${match.path}/reviews`} component={Reviews}></Route>
//       //     </Switch>
//       //   </Suspense>
//       // </div>
//     );
//     // );
//   };
// };

// export default MovieDetailsPage;
