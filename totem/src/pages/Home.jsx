import React from 'react'
import BorderBlue from '../components/BorderBlue.jsx'
import BorderRed from '../components/BorderRed.jsx'
import ButtonEncontreSala from '../components/ButtonEncontreSala.jsx'
import ButtonAmbientes from '../components/ButtonAmbientes.jsx'
import ButtonAtendimento from '../components/ButtonAtendimento.jsx'
import Title from '../components/Title.jsx'
import '../styles/Home.css'

function Home() {

  return (
    <>
    <div className='container'>
      <div className='div-border-red'>
        <BorderRed/>
      </div>
      <div className='div-title'>  
        <Title/>
      </div>
      <div className='div-buttons'>
        <ButtonEncontreSala/>
        <ButtonAmbientes/>
        <ButtonAtendimento/>
      </div>
      <div className='div-border-blue'>
        <BorderBlue/>
      </div>
    </div>
    </>
  )
}

export default Home