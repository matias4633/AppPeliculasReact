import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get, getSimilarMovies, getTrailerVideo } from "../data/httpCliente";
import "../paginas/MovieDetalls.css";
import { getUrlImagen } from "../utils/getUrlImagen";
import { MovieCard } from "../componentes/MovieCard";
import ReactPlayer from 'react-player/youtube'

export function MovieDetalls() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [movies, setMovies] = useState([]);
  const [video , setVideo] = useState(null);
 // console.log(movieId);
  useEffect(() => {
    get("movie/" + movieId).then((result) => {
      //console.log(result);
      setGeneros(result.genres);
      setMovie(result);
      return;
    });
    getSimilarMovies(movieId).then((data) => {
      setMovies(data.results);
      //console.log(movies);
      return;
    });

    getTrailerVideo(movieId).then((data) => {
      console.log(data);
      setVideo(data);
      return;
    });
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [movieId]);
  const urlImg = getUrlImagen(movie, 300);
  let generosVista = "";
  generos.forEach((elemento) => {
    generosVista += ` ${elemento.name} `;
  });
  return (
    <div className="center">
      <div className="contenedor-detalles ">
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
        <div className="contReproductorDescript">
          {video && <div className="reproductor"><ReactPlayer url={video} playing={true}  width='100%'
          height='100%' /></div>}
          <p className=" descripcion">{movie.overview}</p>
        </div>
       
      </div>
        <div className="contenedorPrincipal">
          <div className="contenedor-peliculas">
            {movies &&
              movies.map((movie) => {
                return <MovieCard movie={movie} key={movie.id} />;
              })}
          </div>
        </div>
    </div>
  );
}
