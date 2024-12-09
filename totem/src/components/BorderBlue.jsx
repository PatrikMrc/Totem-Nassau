import React from "react";
import borderBlue from '../assets/azul.svg'
import './componentsStyles/BorderBlue.css'
function BorderBlue(){
    return(
        <>
            <img className="border-blue" src={borderBlue} alt="Borda azul" />
        </>
    )
}
export default BorderBlue;