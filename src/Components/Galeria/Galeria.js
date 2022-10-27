import './Galeria.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';


function Galeria() {

    return (
        <div className='galeria'>
            <h1 id='galeria' >GALERIA</h1>
            <p>A tranquilidade que você precisa para viver bem e melhor no que há de melhor em São Paulo!</p>
            <div className='galeria-caorusel'>
                <Carousel
                nextIcon={<img className='prevNextIcon' src='./nextIconCinza.png'/>}
                prevIcon={<img className='prevNextIcon' src='prevIconCinza.png'/>}
                >
                
                    <CarouselItem className="galeria-carousel-img">
                        <div className='galeria-carousel-img-inner'>

                            <img className='inner-correcao pegarImagem' src='./UNIT-BELA-VISTA_BIKE_SHARE.png' />
                            <div className='icone-lupa'>
                            <a href='./UNIT-BELA-VISTA_BIKE_SHARE.png' target="_blank"><img className='lupaIcone' src="./lupa.png"/></a>
                            </div>
                            <div className='galeria-box-texto'>
                            <p><strong><span>Bici</span>cletário</strong></p>
                            <p>*Imagem preliminar sujeito a alterações</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="galeria-carousel-img">
                        <div className='galeria-carousel-img-inner'>

                            <img className='inner-correcao pegarImagem' src='./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg' />
                            <div className='icone-lupa'>
                                <a href='./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg' target="_blank"><img className='lupaIcone' src="./lupa.png"/></a>
                            </div>
                            <div className='galeria-box-texto'>
                            <p><strong><span>Área</span> da Churrasqueira</strong></p>
                            <p>*Imagem preliminar sujeito a alterações</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="galeria-carousel-img">
                        <div className='galeria-carousel-img-inner'>

                            <img className='inner-correcao pegarImagem' src='./UNIT-BELA-VISTA_COWORK.png' />
                            <div className='icone-lupa'>
                                <a href='./UNIT-BELA-VISTA_COWORK.png' target="_blank"><img className='lupaIcone' src="./lupa.png"/></a>
                            </div>
                            <div className='galeria-box-texto'>
                            <p><strong><span>Área</span> de Coworking</strong></p>
                            <p>*Imagem preliminar sujeito a alterações</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="galeria-carousel-img">
                        <div className='galeria-carousel-img-inner'>

                            <img  className='inner-correcao pegarImagem' src='./UNIT-BELA-VISTA_LAVANDERIA.png' />
                            <div className='icone-lupa'>
                                <a href='./UNIT-BELA-VISTA_LAVANDERIA.png' target="_blank"><img className='lupaIcone' src="./lupa.png"/></a>
                            </div>
                            <div className='galeria-box-texto'>
                            <p><strong><span>Lavan</span>deria</strong></p>
                            <p>*Imagem preliminar sujeito a alterações</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="galeria-carousel-img">
                        <div className='galeria-carousel-img-inner'>

                            <img className='inner-correcao pegarImagem' src='./UNIT-BELA-VISTA_LOBBY.png' />
                            <div className='icone-lupa'>
                                <a href='./UNIT-BELA-VISTA_LOBBY.png' target="_blank"><img className='lupaIcone' src="./lupa.png"/></a>
                            </div>
                            <div className='galeria-box-texto'>
                            <p><strong><span>Lo</span>bby</strong></p>
                            <p>*Imagem preliminar sujeito a alterações</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="galeria-carousel-img">
                        <div className='galeria-carousel-img-inner'>

                            <img  className='inner-correcao1 pegarImagem' src='./UNIT-BELA-VISTA_PeT_2 TIRO.jpg' />
                            <div className='icone-lupa'>
                                <a href='/UNIT-BELA-VISTA_PeT_2 TIRO.jpg' target="_blank"><img className='lupaIcone' src="./lupa.png"/></a>
                            </div>
                            <div className='galeria-box-texto'>
                            <p><strong><span>Área</span> externa para pet</strong></p>
                            <p>*Imagem preliminar sujeito a alterações</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="galeria-carousel-img">
                        <div className='galeria-carousel-img-inner'>

                            <img className='inner-correcao pegarImagem' src='./UNIT-BELA-VISTA_PISCINA_1 TIRO.jpg' />
                            <div className='icone-lupa'>
                                <a href='/UNIT-BELA-VISTA_PISCINA_1 TIRO.jpg' target="_blank"><img className='lupaIcone' src="./lupa.png"/></a>
                            </div>
                            <div className='galeria-box-texto'>
                            <p><strong><span>Área</span> de piscina</strong></p>
                            <p>*Imagem preliminar sujeito a alterações</p>
                            </div>
                        </div>
                    </CarouselItem>
                </Carousel>
            </div>
        </div>
    )
}

export default Galeria