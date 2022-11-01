import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Obrigado from './pages/Obrigado';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='obrigado' element={<Obrigado/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
