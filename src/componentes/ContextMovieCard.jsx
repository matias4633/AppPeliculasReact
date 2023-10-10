import { useEffect, useState } from "react";
import {getSinPaginado , getCategorias} from "../data/httpCliente";
import { MovieCard } from "./MovieCard";
import '../componentes/ContextMovieCard.css';
import { Banner } from "./Banner";
import { Carrousel } from "./Banner";
import { Paginado } from "./Paginado";
import { ListPelis } from "./ListPelis";
import { Categorias } from "./Categorias";


let actualizarListado;


export function ContextMovieCard(){
    const [movies,setMovies] =useState([]);
    const [pagina , setPagina] = useState(1);
    const [data,setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [coordX , setcoordX] = useState(null);
    const [categorias , setCategorias] = useState([]);
    const [url,setUrl] = useState(`movie/popular?`);

    useEffect(()=>{
            console.log(url);
            getSinPaginado(url+`page=${pagina}`).then((data) =>{
            console.log(data);
            setMovies(data.results);
        })
    },[pagina , url]);

    useEffect(()=>{
        async function getData(){
            let data = await getCategorias();
            setCategorias(data.genres);
            console.log(data);
        }
        getData();
    },[]);

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
          document.getElementById("bannerContent").scrollIntoView({behavior:"smooth" , block:"end" , inline:"start"});
        }
        setcoordX(null);
      };

    const actualizarCategoria = (idCategoria)=>{
        console.log(idCategoria);
        setUrl(`discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=${idCategoria}&`)
        //document.getElementById("bannerContent").scrollIntoView({behavior:"smooth" , block:"end" , inline:"start"});
    }

    return (
    <div>
        <div className="bannerContent" id="bannerContent">
           {/* {movies.length > 0 && <Banner array={movies} />}*/}
            {movies.length > 0 && <Carrousel array={movies} />}
        </div>
        <div className="paginado">
        <Paginado pagina={pagina}  onCambioPagina={recibirPagina}/>
        </div>
        <div className="contenedorInferior">
            <div className="contenedorPrincipal" id='contenedor-peliculas' >
                <div className="tituloContenedor"><p>Últimas Peliculas Actualizadas</p></div>
                <div className="contenedorPeliCat">
                    <ListPelis  movies={movies} classes={"contenedor-peliculas"} inicioTouch={handleTouchStart} finTouch={handleTouchMove}  ></ListPelis>
                    <Categorias array = {categorias} funcionOnclick={actualizarCategoria} />
                </div>
                
            </div>
        </div>
        
       
        <div className="paginado">
        <Paginado pagina={pagina}  onCambioPagina={recibirPagina}/>
        </div>
    </div>
    );
    
}

export {actualizarListado} ;