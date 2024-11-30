import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Busca from './pages/Busca.jsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/busca" element={<Busca />} />
            </Routes>
        </Router>
    );
};

export default App;