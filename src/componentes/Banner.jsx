import React, { useEffect, useState } from "react";
import '../componentes/Banner.css';
import { getUrlImagenBanner } from "../utils/getUrlImagen";
import {Link} from "react-router-dom";

export function Banner({array}){
    const [ramdom, setRamdom] = useState(0);
    const [fondoBanner, setfondoBanner] = useState('');
    const [pelicula , setPelicula] = useState(null);
    const [idPeli , setIdPeli] = useState(null);
    const [titulo , setTitulo] = useState("");
    const [descrip , setDescrip] = useState("");
    const [indexSelecionados , setIndexSeleccionados] = useState([]);
    
    useEffect(()=>{
        setPelicula(array[ramdom]);

        
        try {
            setearFondos(pelicula);
        } catch (error) {
            
        } 
        let intervalor ;
        if(indexSelecionados.length<6){
            setIndexSeleccionados([...indexSelecionados , array[ramdom]])
           intervalor = setInterval(() => {
                let ind = (Math.floor(Math.random()*array.length));
                setRamdom(ind);
            }, 3000);
        }else{
            setearFondos(pelicula);
            intervalor = setInterval(() => {
                let ind = (Math.floor(Math.random()*indexSelecionados.length));
                setRamdom(ind);
            }, 3000);
        }
        
        return ()=>clearInterval(intervalor);
    },[ramdom]);
    
    function setearFondos(pelicula){
        let tituloString;
        if(pelicula.title.length>15){
            tituloString=pelicula.title.substring(0,15) + "...";
        }else{
            tituloString=pelicula.title;
        }
        setTitulo(tituloString);
        setIdPeli(pelicula.id);
        setDescrip(pelicula.overview.substring(0,120));
        setfondoBanner(getUrlImagenBanner(pelicula,1280));
    }
    
  
    return (
        <div>
            {idPeli && 
            <Link to={"/movies/"+idPeli}>
            {fondoBanner && <div className="contenedorBanner" ><img  id="banner" src={fondoBanner} ></img>
            </div>}
            <div className="cont-info">
                    <h3 className="subTituloBlanco">{titulo}</h3>
                    <p>{descrip}</p>
                    <button className="bottonPrincipal">▶ VER PELICULA</button>
                </div>
            </Link>}
            
        </div>
    )
}

export function Carrousel({array}){
    
    let arrayAMostrar = array.slice(2);
    console.log("Mosta" );
    console.log(arrayAMostrar)
    return (
        <div className="contenedorCarousel">  
           {arrayAMostrar.map((peli)=>{
                return <div className="tarjeta">
                {peli.id && 
                    <div>
                        <div className="contenedorBanner" ><img  id="banner" src={getUrlImagenBanner(peli,1280)} ></img>
                        </div>
                         <div className="cont-info">
                            <h3 className="subTituloBlanco">{peli.title}</h3>
                            <p>{peli.overview.substring(0,120)}</p>
                           <Link to={"/movies/" + peli.id} > <button className="bottonPrincipal">▶ VER PELICULA</button></Link>
                        </div>
                    </div>
               
                }
                
            </div>
            })} 

          { /* <div>
                {peli.id && 
                <Link to={"/movies/"+peli.id}>
                 <div className="contenedorBanner" ><img  id="banner" src={getUrlImagenBanner(peli,1280)} ></img>
                </div>
                <div className="cont-info">
                        <h3 className="subTituloBlanco">{peli.title}</h3>
                        <p>{peli.overview.substring(0,120)}</p>
                        <button className="bottonPrincipal">▶ VER PELICULA</button>
                    </div>
                </Link>}
                
            </div> */}
        </div>
    )
}