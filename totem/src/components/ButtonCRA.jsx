import React from "react";
import CRAImage from '../assets/cra.svg'
import './componentsStyles/ButtonCRA.css'

function ButtonCRA(){
    return(
        <>
            <img className="btn-cra" src={CRAImage} alt="botao do CRA" />
        </>
    )
}

export default ButtonCRA;