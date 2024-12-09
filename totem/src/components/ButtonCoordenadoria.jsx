import React from "react";
import CoordenadoriaImage from '../assets/coordenadoria.svg'
import './componentsStyles/ButtonCoordenadoria.css'
function ButtonCoordenadoria(){
    return(
        <>
            <img className="btn-coordenadoria" src={CoordenadoriaImage} alt="botao de coordenadoria" />
        </>
    )
}

export default ButtonCoordenadoria;