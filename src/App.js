import './App.css';
import Diferenciais from './Components/Diferenciais/Diferenciais';
import EncontreSeuSonho from './Components/EncontreSeuSonho/EncontreSeuSonho';
import FichaTecnica from './Components/FichaTecnica/FichaTecnica';
import Footer from './Components/Footer/Footer';
import Galeria from './Components/Galeria/Galeria';
import Header from './Components/Header/Header';
import MainSection from './Components/MainSection/MainSection';
import Maps from './Components/Maps/Maps';
import Plantas from './Components/Plantas/Plantas';
import SecondSection from './Components/SecondSection/SecondSection';

function App() {
  return (
    <div className="App">
        <div className='main-section'>
          <Header/>
          <MainSection/>
        </div>
        <div className='second-section'>
        <SecondSection/>
        </div>
        <div className='galeria-section'>
        <Galeria/>
        <Diferenciais/>
        <Plantas/>
        </div>
        <div className='ficha-section'>
        <FichaTecnica/>
        </div>
        <div className='sonho-section' >
        <EncontreSeuSonho/>
        <Maps/>
        <div className='footer-section'>
        <Footer/>
        </div>
        </div>

    </div>
  );
}

export default App;
