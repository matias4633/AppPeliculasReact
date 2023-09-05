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
    useEffect(()=>{
        setPelicula(array[ramdom]);
        
        try {
            setearFondos(pelicula);
        } catch (error) {
            
        }

        let intervalor = setInterval(() => {
            setRamdom((Math.floor(Math.random()*array.length)));
        }, 3000);

        return ()=>clearInterval(intervalor);
        
    },[ramdom]);
    
    function setearFondos(pelicula){
        setTitulo(pelicula.title);
        setIdPeli(pelicula.id);
        setfondoBanner(getUrlImagenBanner(pelicula,1280));
    }
    
  
    return (
        <div>
            {idPeli && 
            <Link to={"/movies/"+idPeli}>
            {fondoBanner && <div className="contenedorBanner" id="banner" style={{backgroundImage:`url(${fondoBanner})`}}>
                <h2>{titulo}</h2>

                </div>}
            </Link>}
            
        </div>
    )
}