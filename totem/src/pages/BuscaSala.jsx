import BorderBlue from '../components/BorderBlue.jsx'
import BorderRed from '../components/BorderRed.jsx'
import InputBloco from '../components/InputBloco.jsx';
import InputNum from '../components/InputNum.jsx'
import '../styles/BuscaSala.css'

function BuscaSala() {

    return (
      <>
      <div className='container'>
        <div className='div-border-red'>
          <BorderRed/>
        </div> 
        <div className='content'>
                <InputNum/>
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