import React from "react";
import './componentsStyles/ButtonAtendimento.css'
import atendimento from '../assets/atendimento.png'
import { useNavigate } from "react-router-dom";

function ButtonAtendimento(){

    const navigate = useNavigate();

    const handleImageClick = () => {
      navigate("/busca");
    };

    return(
        <>
            <img onClick={handleImageClick} className="button" src={atendimento} alt="botao de atendimento ao aluno" />
        </>
    )
}

export default ButtonAtendimento;