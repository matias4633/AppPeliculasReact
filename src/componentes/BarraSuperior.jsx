import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Buscador } from "./Buscador";
import "./BarraSuperior.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm , faStar , faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
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
                <div className="iconoMenu">
                    <div className="logoPrincipal">
                        <a href={'/'} ><img  src={logo}></img></a>
                    </div>
                    <div className="menu">
                    <a href={'/'} ><span><FontAwesomeIcon icon={faFilm} /> INICIO</span></a>
                        <span><FontAwesomeIcon icon={faStar} /> ESTRENOS</span>
                        <span><FontAwesomeIcon icon={faPhotoVideo} /> SERIES</span>
                        <span>DMCA</span>
                        <span>PELICULAS POR AÑOS</span>
                    </div>
                </div>
                
                <div className="contBuscador">
                    <Buscador />
                </div>
            </div>
           
        </>
    );
}
