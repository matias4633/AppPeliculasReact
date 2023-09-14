import React from "react";

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
        <>
         <input type="text" onChange={buscarPeliculas} ></input>
        </>

    );
}