import BorderBlue from '../components/BorderBlue.jsx'
import BorderRed from '../components/BorderRed.jsx'
import InputBloco from '../components/InputBloco.jsx';
import '../styles/BuscaSala.css'

function BuscaSala() {

    return (
      <>
      <div className='container'>
        <div className='div-border-red'>
          <BorderRed/>
        </div> 
        <div className='content'>
            <div className='label'>
                <span className='title-label'>Numero:</span>
                <input className='input-label' placeholder='Digite O Numero Da Sala' type="text" />
            </div>
                <InputBloco/>
        </div>     
        <div className='div-border-blue'>
          <BorderBlue/>
        </div>
      </div>
      </>
    )
  }
  
  export default BuscaSala;