import { useEffect, useState } from "react";
import {get} from "../data/httpCliente";
import { MovieCard } from "./MovieCard";
import '../componentes/ContextMovieCard.css';
import { Banner } from "./Banner";
import { Paginado } from "./Paginado";

export function ContextMovieCard(){
    const [movies,setMovies] =useState([]);
    const [pagina , setPagina] = useState(1);
    const [data,setData] = useState({});
    useEffect(()=>{
        get('movie/popular' , pagina).then((data) =>{
            console.log(data);
            setData(data);
            setMovies(data.results);
        })
        
    },[pagina]);

   /*  const handleChangePagina = (evento)=>{ Para cuiando es de un input
        let pagina = evento.target.value;
        if(pagina){
            setPagina(pagina);
        }
       
    }*/

    const recibirPagina = (pagina)=>{
        if(pagina){
            setPagina(pagina);
        }
    }
    return (
    <div>
        <div className="bannerContent">
            {movies.length > 0 && <Banner array={movies} />}
        </div>
        <div className="paginado">
        <Paginado pagina={pagina}  onCambioPagina={recibirPagina}/>
        </div>
        
        <div className="tituloContenedor">Últimas Peliculas Actualizadas</div>
        <div className="contenedorPrincipal">
            <div className="contenedor-peliculas">
                
                {movies.map((movie)=>{
                    return <MovieCard movie={movie} key={movie.id}/>
                })}
            </div>
        </div>
       
        <div className="paginado">
        <Paginado pagina={pagina}  onCambioPagina={recibirPagina}/>
        </div>
    </div>
    );
}