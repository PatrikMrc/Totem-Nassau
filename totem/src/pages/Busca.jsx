import React from "react";
import '../styles/Busca.css'
function Busca(){
    return(
        <>
            <div className='container'>
                    <button onClick={() => handleButtonClick(`Botao 1`)}>
                    <img src='./assets/Frame 7.svg' alt='Botao 1' className='button-image' />
                </button>   
                    <button onClick={() => handleButtonClick(`Botao 2`)}>
                    <img src='./assets/ambientes.svg' alt='Botao 2' className='button-image'/>
                </button>
                    <button onClick={() => handleButtonClick(`Botao 3`)}>
                    <img src='./assets/atendimento.svg' alt='Botao 3' className='button-image'/>
                </button>  
            </div>
        </>
    )
}

export default Busca;