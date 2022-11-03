import './MainSection.css'
import { useState } from 'react'


function MainSection() {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div className='mainSection'>
            <div className='mainSection-box'>
                <div className='mainSection-boxTexto'>
                    <img src='./UNITY_LOGO.png' alt='Imagem da Logo'/>
                    <p>Breve Lançamento</p>
                    <h1>Invista no melhor de <br /><strong>São Paulo.</strong></h1>
                    <h2><strong>Ideal para você</strong> que quer praticidade, sofisticação e lazer no dia a dia!</h2>
                    <div className='mainSection-boxTexto-botoes'>
                        <a className='botao-amarelo' href='#icones'>Saiba mais</a>
                    </div>
                </div>
                <div className='icon-scroll' />
                <div className='mainSection-formsArea'>
                    <form id="llCaptureForm" className="llform001" action="//paginas.rocks/capture" method="post">
                        <input type="hidden" id="mid" name="mid" value="667544" />
                        <input type="hidden" id="fid" name="fid" value="54811" />
                        <input type="hidden" id="formType" name="formType" value="dynamic" />
                        <p><strong>Se inscreva agora!</strong></p>
                        <div className='empreendimento'>
                            <label >Interesse no Empreendimento</label>
                            <div className="field-error" id="llerror83633"></div>
                            <div className="radio-list"  >
                                <div className="radio">
                                    <label>
                                        <input type="radio" id="llfield161345" name="llfield83633" value="Investimento"
                                            checked={checked}
                                            onChange={handleChange}
                                        /> Investimento
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" id="llfield161346" name="llfield83633" value="Moradia" /> Moradia
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <input className='inputs' type="text" id="llfield69862" name="llfield69862" placeholder="Nome:" data-required="true" />
                            <div className="field-error" id="llerror69862"></div>
                        </div>
                        <div>
                            <input className='inputs' type="email" id="llfield69863" name="llfield69863" placeholder="Tel.:" data-required="true" />
                            <div className="field-error" id="llerror69863"></div>
                        </div>
                        <div>
                            <input className='inputs' type="tel" id="llfield69864" name="llfield69864" placeholder="E-mail:" data-required="true" />
                            <div className="field-error" id="llerror69864"></div>
                        </div>
                        <div>
                            <div className="field-error" id="LGPDValidation"></div>
                            <div className="checkbox-list" data-required="true" >
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" id="LGPDValidation" name="LGPDValidation"  value="1" /> Autorizo o recebimento de informações dos empreendimentos das empresas DW Incorp e Unity Engenharia via e-mail, WhatsApp e/ou telefone celular.
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="button-bar botao-amarelo">
                            <button type="submit">Enviar!</button>
                        </div>
                        <div className="loading-box">
                            <img src="//paginas.rocks/content/images/spinner.gif" alt='' />
                            <div>loading...</div>
                        </div>
                        <div className="error-box">
                            <img src="//paginas.rocks/content/images/error-icon.png" alt=''/>
                            <div></div>
                            <button type="button" className="btn" id="btn-error">Ok</button>
                        </div>
                        <img src="https://llimages.com/redirect/redirect.aspx?A=V&f=54811&m=667544" alt='' style={{display: 'none'}} />
                    </form>
                </div>
            </div>
            <div className='mainSection-porQue'>
                <h1>Por que <strong>Bela Vista?</strong></h1>
                <p><strong>APENAS 10 MINUTOS DA AVENIDA PAULISTA</strong> Morar ao lado de uma grande avenida é a certeza de ter escolhido o lugar ideal para investir. Bem-estar que valoriza sua vida e, principalmente, o seu investimento!</p>
                <p>O DIY Bela Vista conta com apartamentos e Studios de 26m² a 52m². Ideal para você que quer praticidade, sofisticação e lazer no dia a dia, ambiente pet friendly e com infraestrutura completa.</p>
            </div>
        </div>
    )
}

export default MainSection