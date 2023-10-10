import React from "react";
import "./Categorias.css";

export function Categorias({array , funcionOnclick}){
    return (
        <>
        <div className="contenedorCategorias">
            <h2>Categorias</h2>
            <div className="contenedorCategoriasSpan">
            {array && array.map((elemento)=>
                <span key={elemento.id} onClick={()=>{funcionOnclick(elemento.id)}}>{elemento.name}</span>)
            }
            </div>
           
        </div>
        
        </>
    );
}