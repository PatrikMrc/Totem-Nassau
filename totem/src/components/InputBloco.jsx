import React from "react";
import './componentsStyles/InputBloco.css'
import Select from 'react-select'
import { useState } from "react";

function InputBloco(){
    const [selectedBloco, setSelectedBloco] = useState("");
    
    const handleChange = (event) => {
        setSelectedBloco(event.target.value);
      };
      const options = [
        { value: "A", label: "Bloco A" },
        { value: "B", label: "Bloco B" },
        { value: "C", label: "Bloco C" },
        { value: "D", label: "Bloco D" },
      ];
      
    return(
        <>
            <div id="container">
                <label htmlFor="bloco">Selecione um bloco:</label>
                <Select options={options}/>
                
                {selectedBloco && <p>Você selecionou: {selectedBloco}</p>}
            </div>
        </>
    )
}

export default InputBloco;