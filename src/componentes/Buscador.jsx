import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./Buscador.css";

export function Buscador(){
    let timeout;
    const buscarPeliculas=async(evt)=>{
        let key = evt.target.value;
        clearTimeout(timeout);
        timeout=setTimeout(async()=>{
            let data = await getMoviesByWord(key);
            console.log(data);
        },2000)
    };
    
    return(
        <div className="contBuscador">
            <div className="contenedorBuscador">
                    <input type="text" placeholder="Buscar" onChange={buscarPeliculas} ></input>
                    <a><FontAwesomeIcon icon={faSearch} /></a>
            </div>
        </div>

    );
}