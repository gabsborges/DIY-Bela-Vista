import './Galeria.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';



function Galeria() {

        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const [show2, setShow2] = useState(false);
        const handleClose2 = () => setShow2(false);
        const handleShow2 = () => setShow2(true);

        const [show3, setShow3] = useState(false);
        const handleClose3 = () => setShow3(false);
        const handleShow3 = () => setShow3(true);

        const [show4, setShow4] = useState(false);
        const handleClose4 = () => setShow4(false);
        const handleShow4 = () => setShow4(true);

        const [show5, setShow5] = useState(false);
        const handleClose5 = () => setShow5(false);
        const handleShow5 = () => setShow5(true);

        const [show6, setShow6] = useState(false);
        const handleClose6 = () => setShow6(false);
        const handleShow6 = () => setShow6(true);

        const [show7, setShow7] = useState(false);
        const handleClose7 = () => setShow7(false);
        const handleShow7 = () => setShow7(true);



    return (
        <div className='galeria'>
            <h1 id='galeria' >GALERIA</h1>
            <p>A tranquilidade que você precisa para viver bem e melhor no que há de melhor em São Paulo!</p>
            <div className='galeria-caorusel'>
                <Carousel
                    nextIcon={<img alt="" className='prevNextIcon' src='./nextIconCinza.png' />}
                    prevIcon={<img alt="" className='prevNextIcon' src='prevIconCinza.png' />}
                >

                    <CarouselItem className="galeria-carousel-img">
                        <div className='galeria-carousel-img-inner'>

                            <img alt="" className='inner-correcao pegarImagem' onClick={handleShow} src='./UNIT-BELA-VISTA_BIKE_SHARE.png' />
                            <div className='icone-lupa'>
                            <img alt="" className='lupaIcone' src="./lupa.png" />
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <Modal.Body><img alt="" src='./bike-share-carousel.png' /></Modal.Body>
                                </Modal>
                            </div>
                            <div className='galeria-box-texto'>
                                <p><strong><span>Bici</span>cletário</strong></p>
                                <p>*Imagem preliminar sujeito a alterações</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="galeria-carousel-img">
                        <div className='galeria-carousel-img-inner'>

                            <img alt="" className='inner-correcao pegarImagem' onClick={handleShow2} src='./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg' />
                            <div className='icone-lupa'>
                                <img alt="" className='lupaIcone' src="./lupa.png" />
                                <Modal show={show2} onHide={handleClose2}>
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <Modal.Body><img alt="" src='./churrasqueira-carousel.png' /></Modal.Body>
                                </Modal>
                            </div>
                            <div className='galeria-box-texto'>
                                <p><strong><span>Área</span> da Churrasqueira</strong></p>
                                <p>*Imagem preliminar sujeito a alterações</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="galeria-carousel-img">
                        <div className='galeria-carousel-img-inner'>

                            <img alt="" className='inner-correcao pegarImagem' onClick={handleShow3} src='./UNIT-BELA-VISTA_COWORK.png' />
                            <div className='icone-lupa'>
                                <img alt="" className='lupaIcone' src="./lupa.png" />
                                <Modal show={show3} onHide={handleClose3}>
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <Modal.Body><img alt="" src='./coworking-carousel.png' /></Modal.Body>
                                </Modal>
                            </div>
                            <div className='galeria-box-texto'>
                                <p><strong><span>Área</span> de Coworking</strong></p>
                                <p>*Imagem preliminar sujeito a alterações</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="galeria-carousel-img">
                        <div className='galeria-carousel-img-inner'>

                            <img alt="" className='inner-correcao pegarImagem' onClick={handleShow4} src='./UNIT-BELA-VISTA_LAVANDERIA.png' />
                            <div className='icone-lupa'>
                                <img alt="" className='lupaIcone' src="./lupa.png" />
                                <Modal show={show4} onHide={handleClose4}>
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <Modal.Body><img alt="" src='./lavanderia-carousel.png' /></Modal.Body>
                                </Modal>
                            </div>
                            <div className='galeria-box-texto'>
                                <p><strong><span>Lavan</span>deria</strong></p>
                                <p>*Imagem preliminar sujeito a alterações</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="galeria-carousel-img">
                        <div className='galeria-carousel-img-inner'>

                            <img alt="" className='inner-correcao pegarImagem' onClick={handleShow5} src='./UNIT-BELA-VISTA_LOBBY.png' />
                            <div className='icone-lupa'>
                                <img alt="" className='lupaIcone' src="./lupa.png" />
                                <Modal show={show5} onHide={handleClose5}>
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <Modal.Body><img alt="" src='./vista-lobby-carousel.png' /></Modal.Body>
                                </Modal>
                            </div>
                            <div className='galeria-box-texto'>
                                <p><strong><span>Lo</span>bby</strong></p>
                                <p>*Imagem preliminar sujeito a alterações</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="galeria-carousel-img">
                        <div className='galeria-carousel-img-inner'>

                            <img alt="" className='inner-correcao1 pegarImagem' onClick={handleShow6} src='./UNIT-BELA-VISTA_PeT_2 TIRO.jpg' />
                            <div className='icone-lupa'>
                                <img alt="" className='lupaIcone' src="./lupa.png" />
                                <Modal show={show6} onHide={handleClose6}>
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <Modal.Body><img alt="" src='./pet-carousel.png' /></Modal.Body>
                                </Modal>
                            </div>
                            <div className='galeria-box-texto'>
                                <p><strong><span>Área</span> externa para pet</strong></p>
                                <p>*Imagem preliminar sujeito a alterações</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="galeria-carousel-img">
                        <div className='galeria-carousel-img-inner'>

                            <img alt="" className='inner-correcao pegarImagem' onClick={handleShow7} src='./UNIT-BELA-VISTA_PISCINA_1 TIRO.jpg' />
                            <div className='icone-lupa'>
                                <img alt="" className='lupaIcone' src="./lupa.png" />
                                <Modal show={show7} onHide={handleClose7}>
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <Modal.Body><img alt="" src='./piscina-carousel.png' /></Modal.Body>
                                </Modal>
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