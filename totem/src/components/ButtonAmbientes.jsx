import React from "react";
import ambientes from '../assets/ambientes.svg'
import './componentsStyles/ButtonAmbientes.css'
function ButtonAmbientes(){
    return(
        <>
            <img className="button-ambientes" src={ambientes} alt="botao de ambientes coletivos" />
        </>
    )
}

export default ButtonAmbientes;