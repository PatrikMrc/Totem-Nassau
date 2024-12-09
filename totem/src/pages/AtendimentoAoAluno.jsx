import React from "react";
import BorderBlue from "../components/BorderBlue";
import BorderRed from "../components/BorderRed";
import TitleAtendimento from "../components/TitleAtendimento";
import ButtonCRA from '../components/ButtonCRA.jsx'
import ButtonCoordenadoria from '../components/ButtonCoordenadoria.jsx'
import '../styles/AtendimentoAoAluno.css'
function AtendimentoAoAluno(){
    return(
        <>
            <div className="container">
                <BorderRed/>
                <div className="title-atendimento">
                    <TitleAtendimento/>
                </div>
                <div className="div-buttons-atendimento">
                    <ButtonCRA/>
                    <ButtonCoordenadoria/>
                </div>
                <BorderBlue/>
            </div>
        </>       
    )
}

export default AtendimentoAoAluno;