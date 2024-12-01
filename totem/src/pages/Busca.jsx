import React from 'react';
import '../styles/Buscabutton.css';
import craImg from "../assets/cra.svg";
import coordenadoriaImg from "../assets/coordenadoria.svg";
import Title from "../components/TitleBusca"; // Ajuste o caminho se necessário

function BotoesComImagens() {
  return (
    <div>
      {/* Adiciona o título antes do conteúdo */}
      <Title />
      
      <div className="button-container">
        <button className="image-button">
          <img src={craImg} alt="CRA" className="button-image" />
          CRA
        </button>
        <button className="image-button">
          <img src={coordenadoriaImg} alt="Coordenadoria" className="button-image" />
          Coordenadoria
        </button>
      </div>
    </div>
  );
}

export default BotoesComImagens;


