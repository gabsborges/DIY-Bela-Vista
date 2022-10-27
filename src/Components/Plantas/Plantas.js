import './Plantas.css'
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';

function Plantas() {
    return (
        <div className='plantas'>
            <h1 id='plantas' >PLANTAS</h1>
            <p>Viva em apartamentos modernos, amplos e com acesso a espaços e serviços exclusivos!</p>
            <Carousel
            indicators={false}
            nextIcon={<img className='prevNextIcon' src='./nextIconCinza.png' alt='Icone de próximo slide' />}
            prevIcon={<img className='prevNextIcon' src='prevIconCinza.png' alt='Icone de slide anterior' />}
            >
                <CarouselItem>
                    <div className='plantas-box'>
                        <img className='img-redm' src='./41m2.png' alt='planta de 41 m²'/>
                        <div className='plantas-box-texto'>
                            <div className='plantas-box-texto-padrao edit-img1'>
                                <div className='detalhePadrao'></div>
                                <p>PLANTA PADRÃO</p>
                            </div>
                            <div className='plantas-box-wrapper'>
                                <div className='plantas-box-texto-home'>
                                    <h1>Apartamento <br/>41 m²</h1>
                                </div>
                                <div className='plantas-box-texto-paragrafo'>
                                    <span>Planta com 1 dormitório, entregue com infraestrutura completa para instalação de ar-condicionado (equipamento de ar-condicionado por conta do cliente) caixa acoplada do vaso com sistema dual-flush, além de tanque e pontos para instalação de máquina lava e seca.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className='plantas-box'>
                        <img className='img-redm' src='./31m2.png' alt='icone da planta de 31m²'/>
                        <div className='plantas-box-texto'>
                            <div className='plantas-box-texto-padrao edit-img2'>
                                <div className='detalhePadrao'></div>
                                <p>PLANTA PADRÃO</p>
                            </div>
                            <div className='plantas-box-wrapper'>
                                <div className='plantas-box-texto-home'>
                                    <h1>Studio 31 m²</h1>
                                </div>
                                <div className='plantas-box-texto-paragrafo'>
                                    <span>O studio de 31 m² conta com Caixa acoplada do vaso com sistema dual-flush, infraestrutura completa para instalação de ar-condicionado (ar-condicionado por conta do cliente).</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className='plantas-box'>
                        <img className='img-redm1' src='./26m2.png' />
                        <div className='plantas-box-texto'>
                            <div className='plantas-box-texto-padrao edit-img3'>
                                <div className='detalhePadrao'></div>
                                <p>PLANTA PADRÃO</p>
                            </div>
                            <div className='plantas-box-wrapper'>
                                <div className='plantas-box-texto-home'>
                                    <h1>Studio 26 m²</h1>
                                </div>
                                <div className='plantas-box-texto-paragrafo'>
                                    <span>O studio de 26 m² entregue com infraestrutura completa para instalação
                                    de ar-condicionado (equipamento de ar-condicionado por conta do cliente) e Caixa acoplada do vaso com sistema dual-flush.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
            </Carousel>
        </div>
    )
}

export default Plantas