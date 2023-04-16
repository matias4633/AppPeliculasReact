import "./MovieCard.css";
import { Link } from "react-router-dom";

export function MovieCard({ movie }) {
  //console.log(movie);
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className="contenedor-movie">
      <Link to={"/movies/"+movie.id}>
        <img
          className="imagen"
          width={230}
          height={345}
          src={imageUrl}
          alt={movie.title}
        ></img>
        <label className="titulo-pelicula">{movie.title}</label>
      </Link>
    </li>
  );
}
