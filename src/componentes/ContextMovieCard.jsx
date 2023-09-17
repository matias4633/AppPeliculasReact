import { useEffect, useState } from "react";
import {get} from "../data/httpCliente";
import { MovieCard } from "./MovieCard";
import '../componentes/ContextMovieCard.css';
import { Banner } from "./Banner";
import { Carrousel } from "./Banner";
import { Paginado } from "./Paginado";
import { ListPelis } from "./ListPelis";


let actualizarListado;


export function ContextMovieCard(){
    const [movies,setMovies] =useState([]);
    const [pagina , setPagina] = useState(1);
    const [data,setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [coordX , setcoordX] = useState(null);

    useEffect(()=>{
        get('movie/popular' , pagina).then((data) =>{
            //console.log(data);
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
        if(pagina && pagina>0){
            setPagina(pagina);
        }
    }

    actualizarListado = (movies)=>{
       setMovies(movies);
    }

    const handleTouchStart = (e) => {
        setcoordX(e.touches[0].clientX);
    };

    const  handleTouchMove = (e) => {
        if (coordX === null ) {
          return;
        }
    
        const currentX = e.touches[0].clientX;
        const deltaX = currentX - coordX;
        if (Math.abs(deltaX) > 5) {
          if (deltaX > 0) {
            recibirPagina(pagina-1)
          } else {
            recibirPagina(pagina+1)
          }
          document.getElementById("contenedor-peliculas").scrollIntoView();
        }
        setcoordX(null);
      };

    return (
    <div>
        <div className="bannerContent">
           {/* {movies.length > 0 && <Banner array={movies} />}*/}
            {movies.length > 0 && <Carrousel array={movies} />}
        </div>
        <div className="paginado">
        <Paginado pagina={pagina}  onCambioPagina={recibirPagina}/>
        </div>
        <span id='contenedor-peliculas'></span>
        <div className="tituloContenedor">Últimas Peliculas Actualizadas</div>
        <div className="contenedorPrincipal" >
           
            <ListPelis  movies={movies} classes={"contenedor-peliculas"} inicioTouch={handleTouchStart} finTouch={handleTouchMove}  ></ListPelis>
        </div>
       
        <div className="paginado">
        <Paginado pagina={pagina}  onCambioPagina={recibirPagina}/>
        </div>
    </div>
    );
    
}

export {actualizarListado} ;