import React from "react";
import borderRed from '../assets/vermelho.svg'
import './componentsStyles/BorderRed.css'
function BorderRed(){
    return(
        <>
            <img className="border-red" src={borderRed} alt="borda vermelha" />
        </>
    )
}

export default BorderRed;