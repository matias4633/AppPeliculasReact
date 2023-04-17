import "./MovieCard.css";
import { Link } from "react-router-dom";
import { getUrlImagen } from "../utils/getUrlImagen";

export function MovieCard({ movie }) {
  //console.log(movie);
  const imageUrl = getUrlImagen(movie,300);
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
