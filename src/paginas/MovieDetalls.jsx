import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {get} from '../data/httpCliente';

export function MovieDetalls(){
    const {movieId}=useParams;
    const {movie,setMovie} = useState(null);

    useEffect(()=>{
        get("/movie/"+movieId).then(result=>setMovie(result));
        console.log(movie);
    },[])
    
    return <h1>Detalls</h1>
}