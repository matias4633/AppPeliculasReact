import { useEffect, useState } from "react";
import {get} from "../data/httpCliente";
import { MovieCard } from "./MovieCard";
import '../componentes/ContextMovieCard.css';
export function ContextMovieCard(){
const [movies,setMovies] =useState([]);

useEffect(()=>{
    get('movie/popular').then((data) =>{
        setMovies(data.results);
    })
},[]);
    return (<ul className="contenedor-peliculas">
        {movies.map((movie)=>{
            return <MovieCard movie={movie} key={movie.id}/>
        })}
    </ul>);
}