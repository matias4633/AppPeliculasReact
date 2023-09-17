import React from "react";
import { MovieCard } from "./MovieCard";


export function ListPelis({movies, classes ,  inicioTouch , finTouch }){
    return(
        <>
          <div className={classes}  onTouchStart={inicioTouch} onTouchMove={finTouch} >
                {movies.map((movie)=>{
                    return <MovieCard movie={movie} key={movie.id}/>
                })}
                {!movies && <h3>No se encontraron resultados</h3>}
            </div>  
        </>
    )
}