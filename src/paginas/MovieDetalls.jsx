import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get, getSimilarMovies } from "../data/httpCliente";
import "../paginas/MovieDetalls.css";
import { getUrlImagen } from "../utils/getUrlImagen";
import { MovieCard } from "../componentes/MovieCard";
export function MovieDetalls() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [movies, setMovies] = useState([]);
  console.log(movieId);
  useEffect(() => {
    get("movie/" + movieId).then((result) => {
      console.log(result);
      setGeneros(result.genres);
      setMovie(result);
      return;
    });
    getSimilarMovies(movieId).then((data) => {
      setMovies(data.results);
      console.log(movies);
      return;
    });
  }, [movieId]);
  const urlImg = getUrlImagen(movie, 300);
  let generosVista = "";
  generos.forEach((elemento) => {
    generosVista += ` ${elemento.name} `;
  });
  return (
    <div>
      <div className="contenedor-detalles">
        <div className="contenedor-tarjeta">
          <img
            className="col imagen-detalles"
            src={urlImg}
            alt={movie.title}
          ></img>
          <span className="titulo-detalles">{movie.title}</span>
          <p className="generos">
            <strong>Generos : {generosVista}</strong>
          </p>
        </div>

        <p className="col descripcion">{movie.overview}</p>
      </div>
      <div>
        <div className="contenedor-similares">
          {movies &&
            movies.map((movie) => {
              return <MovieCard movie={movie} key={movie.id} />;
            })}
        </div>
      </div>
    </div>
  );
}
