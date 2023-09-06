import { useEffect, useState } from "react";
import {get} from "../data/httpCliente";
import { MovieCard } from "./MovieCard";
import '../componentes/ContextMovieCard.css';
import { Banner } from "./Banner";
export function ContextMovieCard(){
const [movies,setMovies] =useState([]);

useEffect(()=>{
    get('movie/popular').then((data) =>{
        setMovies(data.results);
    })
    
},[]);
    return (
    <div>
        <div className="bannerContent">
            {movies.length > 0 && <Banner array={movies} />}
        </div>
        
        <div className="contenedor-peliculas">
            {movies.map((movie)=>{
                return <MovieCard movie={movie} key={movie.id}/>
            })}
        </div>
    </div>
    );
}