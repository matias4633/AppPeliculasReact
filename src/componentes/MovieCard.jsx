import "./MovieCard.css";
import { Link } from "react-router-dom";
import { getUrlImagen } from "../utils/getUrlImagen";

export function MovieCard({ movie }) {
  console.log(movie);
  const imageUrl = getUrlImagen(movie,300);

  return (
    <div className="contenedor-movie">
      <Link to={"/movies/"+movie.id}>
        <div>
          <img
            className="imagenCard"
            src={imageUrl}
            alt={movie.title}
          ></img>
          <span className="puntaje">{movie.vote_average % 1 == 0 ? (movie.vote_average+'.0') : movie.vote_average }</span>
        </div>
        
        
      </Link>
      <label className="titulo-pelicula">{movie.title}</label>
    </div>
  );
}
