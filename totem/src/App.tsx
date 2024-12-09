import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import BuscaSala from './pages/BuscaSala.jsx'
import AtendimentoAoAluno from './pages/AtendimentoAoAluno.jsx'
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/buscasala' element={<BuscaSala/>}/>
                <Route path='/atendimentoaoaluno' element={<AtendimentoAoAluno/>} />
            </Routes>
        </Router>
    );
};

export default App;