import React from "react";
import './componentsStyles/ButtonEncontreSala.css'
import encontreSala from '../assets/encontre.png' 
import { useNavigate } from "react-router-dom";

function ButtonEncontreSala(){

    const navigate = useNavigate();

    const handleImageClick = () => {
      navigate("/buscasala");
    };

    return(
        <>
            <img onClick={handleImageClick} className="button" src={encontreSala} alt="botao de encontre sua sala" />
        </>
    )
}

export default ButtonEncontreSala;