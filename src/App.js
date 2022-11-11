import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Obrigado from './pages/Obrigado';
import NonPage from './pages/NonPage';
import PoliticaDePrivacidade from './pages/PoliticaDePrivacidade';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/obrigado' element={<Obrigado />}/>
          <Route path='/politica-de-privacidade' element={<PoliticaDePrivacidade />}/>
          <Route path='*' element={<NonPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;