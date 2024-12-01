import React from "react";
import './componentsStyles/InputNum.css'
function InputNum() {
    return(
        <>
            <div className='label'>
                <span className='title-label'>Numero:</span>
                <input className='input-label' placeholder='Digite O Numero Da Sala' type="number" />
            </div>
        </>
    )
}

export default InputNum;