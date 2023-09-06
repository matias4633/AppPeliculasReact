import { useEffect, useState } from "react";
import {get} from "../data/httpCliente";
import { MovieCard } from "./MovieCard";
import '../componentes/ContextMovieCard.css';
import { Banner } from "./Banner";
export function ContextMovieCard(){
    const [movies,setMovies] =useState([]);
    const [pagina , setPagina] = useState(1);
    useEffect(()=>{
        get('movie/popular' , pagina).then((data) =>{
            setMovies(data.results);
        })
        
    },[pagina]);

    const handleChangePagina = (evento)=>{
        let pagina = evento.target.value;
        if(pagina){
            setPagina(pagina);
        }
       
    }
    return (
    <div>
        <div className="bannerContent">
            {movies.length > 0 && <Banner array={movies} />}
        </div>
        <div>
            <input type="number" onChange={handleChangePagina}></input>
        </div>
        <div className="tituloContenedor">Ultimas Peliculas Actualizadas</div>
        <div className="contenedor-peliculas">
            
            {movies.map((movie)=>{
                return <MovieCard movie={movie} key={movie.id}/>
            })}
        </div>
        
    </div>
    );
}