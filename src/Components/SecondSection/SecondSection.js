import React from 'react';
import './SecondSection.css'
import Carousel from 'react-elastic-carousel';


function SecondSection() {
  
  return (
    <div className='secondSection'>
        <div id='icones' className='cards-icones-box'>
          <div className='cards-icones-itens'>
            <Carousel 
            enableAutoPlay={true}
            isRTL={true}
            autoPlaySpeed={4500}
            itemsToScroll={2}
            itemsToShow={3}>
            <div className='wrapper-itens'>
                <img src="./icone-plantas.png" alt="icones sobre plantas"
                />
                <p>Plantas modernas de <br />26m² a 52m²</p>
              </div>
              <div className='wrapper-itens'>
                <img src="./icone-hospitais.png" alt="icones sobre hospitais"
                />
                <p>Maior concentração de <br />hospitais privados da <br />cidade de São Paulo</p>
              </div>
              <div className='wrapper-itens'>
                <img src="./icone-trabalhadores.png" alt="icones sobre trabalhadores"
                />
                <p>+ de 112 mil trabalhadores<br /> formais na região</p>
              </div>
              <div className='wrapper-itens'>
              <img src="./icones-metro.png" alt="icones sobre metro"
              />
              <p>mobilidade e fácil acesso<br /> a 5 linhas de metro</p>
            </div>
            <div className='wrapper-itens'>
              <img src="./icones-bares.png" alt="icones sobre bares"
              />
              <p>bares e restaurantes na<br /> localidade</p>
            </div>
            </Carousel>
            </div>
        </div>

        
      <div className='secondSection-midIcon'>
        <img src='./icone-midSection.png' alt='A sessão continua abaixo'/>
      </div>
      <div className='secondSection-text'>
        <div className='secondSection-text-box'>
          <div className='detalheDaBox'></div>
          <p>O DIY Bela Vista está inserido no coração de São Paulo. Pensado para facilitar o dia a dia dos
            seus moradores, o empreendimento é rodeado de hospitais, faculdades e facilidades.</p>
        </div>
        <div className='secondSection-text-box'>
          <div className='detalheDaBox'></div>
          <p>Para fugir da rotina, é possível se divertir em um dos diversos points de lazer, além dos
            espaços de cultura e, inclusive, de uma rota completa de restaurantes para todos os gostos.</p>
        </div>
      </div>
    </div>
  )
}

export default SecondSection



// import React from 'react';
// import './SecondSection.css'
// import 'bootstrap/dist/css/bootstrap.css';
// import Carousel from 'react-bootstrap/Carousel';


// function SecondSection() {
//   return (
//     <div className='secondSection'>
//       <Carousel
//         indicators={false}
//         nextIcon={<img className='nextPrevIcon' src='./next-icon.png' alt='Icone para avançar o item'/>}
//         prevIcon={<img className='nextPrevIcon' src='./prev-icon.png' alt='Icone para retroceder o item'/>}
//       >
//         <Carousel.Item>
//           <div className='cards-icones-itens'>
//             <div className='wrapper-itens'>
//               <img src="./icone-plantas.png" alt="icones sobre plantas"
//               />
//               <p>Plantas modernas de 26m² a 52m²</p>
//             </div>
//             <div className='wrapper-itens'>
//               <img src="./icone-hospitais.png" alt="icones sobre hospitais"
//               />
//               <p>Maior concentração de hospitais privados da cidade de São Paulo</p>
//             </div>
//             <div className='wrapper-itens'>
//               <img src="./icone-trabalhadores.png" alt="icones sobre trabalhadores"
//               />
//               <p>+ de 112 mil trabalhadores formais na região</p>
//             </div>
//           </div>
//         </Carousel.Item>
//         <Carousel.Item>
//         <div className='cards-icones-itens'>
//           <div className='wrapper-itens'>
//               <img src="./icone-trabalhadores.png" alt="icones sobre trabalhadores"
//               />
//               <p>+ de 112 mil trabalhadores formais na região</p>
//             </div>
//             <div className='wrapper-itens'>
//               <img src="./icones-metro.png" alt="icones sobre metro"
//               />
//               <p>mobilidade e fácil acesso a 5 linhas de metro</p>
//             </div>
//             <div className='wrapper-itens'>
//               <img src="./icones-bares.png" alt="icones sobre bares"
//               />
//               <p>bares e restaurantes na localidade</p>
//             </div>
//           </div>
//         </Carousel.Item>
//       </Carousel>
//       <div className='secondSection-midIcon'>
//         <img src='./icone-midSection.png' alt='A sessão continua abaixo'/>
//       </div>
//       <div className='secondSection-text'>
//         <div className='secondSection-text-box'>
//           <div className='detalheDaBox'></div>
//           <p>TO DIY Bela Vista está inserido no coração de São Paulo. Pensado para facilitar o dia a dia dos
//             seus moradores, o empreendimento é rodeado de hospitais, faculdades e facilidades.</p>
//         </div>
//         <div className='secondSection-text-box'>
//           <div className='detalheDaBox'></div>
//           <p>Para fugir da rotina, é possível se divertir em um dos diversos points de lazer, além dos
//             espaços de cultura e, inclusive, de uma rota completa de restaurantes para todos os gostos.</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SecondSection