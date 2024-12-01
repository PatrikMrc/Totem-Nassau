import React from "react";
import './componentsStyles/InputBloco.css'

function InputBloco(){
    return(
        <>
            <div id="container">
                <label htmlFor="bloco">Selecione um bloco:</label>
                <select className="input-label" id="bloco">
                    <option value="" disabled>Escolha uma opção</option>
                    <option value="A">Bloco A</option>
                    <option value="B">Bloco B</option>
                    <option value="C">Bloco C</option>
                    <option value="D">Bloco D</option>
                </select>
            </div>
        </>
    )
}

export default InputBloco;