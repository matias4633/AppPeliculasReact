import React from "react";
import "./Paginado.css";

export function Paginado({pagina , onCambioPagina}){


    const paginaUp = ()=>{
        onCambioPagina(pagina+1);
    } 
    const paginaDown = ()=>{
        onCambioPagina(pagina-1);
    }    
    return(
        <div className="botonPaginado">
         {pagina>1 && <button onClick={paginaDown}> {"< " + (pagina-1)}</button> }
         <p>Pagina {pagina}</p>
        <button onClick={paginaUp}>{(pagina+1) +" >" }</button>
      
        </div>
    );
}