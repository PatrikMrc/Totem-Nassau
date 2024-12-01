import React from "react";
import ambientes from '../assets/ambientes.png'
import './componentsStyles/ButtonAmbientes.css'
import { useNavigate } from "react-router-dom";

function ButtonAmbientes(){

    const navigate = useNavigate();

    const handleImageClick = () => {
      navigate("/ambientes-coletivos");
    };

    return(
        <>
                <img onClick={handleImageClick} className="button" src={ambientes} alt="botao de ambientes coletivos" />
        </>
    )
}

export default ButtonAmbientes;