import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./Buscador.css";
import {actualizarListado} from "./ContextMovieCard";
import { getMoviesByWord } from "../data/httpCliente";

export function Buscador(){
    let timeout;
    const buscarPeliculas=async(evt)=>{
        let key = evt.target.value;
        clearTimeout(timeout);
        timeout=setTimeout(async()=>{
            if(key){
                let data = await getMoviesByWord(key);
                console.log(data);
                actualizarListado(data.results);
            }
           
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