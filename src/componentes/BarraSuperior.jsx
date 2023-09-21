import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Buscador } from "./Buscador";
import "./BarraSuperior.css";

export function BarraSuperior(){
    const [fondo , setFondo] = useState("");
    

    useEffect(()=>{
        const cambiarFondoBarra = ()=>{
            if(window.scrollY>10){
                setFondo("fondoScroll");
            }else{
                setFondo("");
            }
        }
        window.addEventListener('scroll', cambiarFondoBarra);

        return ()=>{
            window.removeEventListener('scroll' , cambiarFondoBarra);
        }
    },[window.scrollY]);
    
    return (
        <>  
            <div className={`contBarra ${fondo}`}>   
                <div className="logoPrincipal">
                    <a href={'/'} ><img  src={logo}></img></a>
                </div>
                <div className="contBuscador">
                    <Buscador />
                </div>
            </div>
           
        </>
    );
}
