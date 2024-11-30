import React from "react";
import atendimento from '../assets/atendimento.svg'
import './componentsStyles/ButtonAtendimento.css'
function ButtonAtendimento(){
    return(
        <>
            <img className="button-atendimento" src={atendimento} alt="botao de atendimento ao aluno" />
        </>
    )
}

export default ButtonAtendimento;