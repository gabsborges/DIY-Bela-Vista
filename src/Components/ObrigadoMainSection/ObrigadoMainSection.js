import './ObrigadoMainSection.css'

function ObrigadoMainSection() {
    return (
        <div className='obrigadoMainSection'>
            <div className='obrigadoMainSection-box'>
                <div className='obrigadoMainSection-box-texto'>
                    <h1>Obrigado!</h1>
                    <p>Agradecemos o seu interesse em conhecer um pouco mais sobre o DIY Bela Vista.<br/>Em breve, você receberá um -email de confirmação e iremos entrar em contato!</p>
                </div>
                <div className='obrigadoMainSection-box-cards'>
                    <div className='obrigadoMainSection-card'>
                        <h1>Passo 1</h1>
                        <h2>Confira seu e-mail</h2>
                        <p><strong>(Verificar no spam)</strong></p>
                        <img src='./icone_1.png' alt='icone de e-mail'/>
                        <p>Abra seu e-mail e confira se recebeu a confirmação de sua inscrição.</p>
                    </div>
                    <div className='obrigadoMainSection-card'>
                        <h1>Passo 2</h1>
                        <h2>Com dúvida?<br/>Acione nosso suporte!</h2>
                        <img src='./icone_2.png' alt='icone do suport'/>
                        <p>Caso tenha alguma dúvida ou precise de suporte fale conosco pelo telefone:<br /> <strong>(11) 95186-7047</strong></p>
                    </div>
                    <div className='obrigadoMainSection-card'>
                        <h1>Passo 3</h1>
                        <h2>Não perca a chance de ver o nosso DIY</h2>
                        <a href='BOOK_DIY_BELA_VISTA.pdf' target="_blank"><img className='buzz-out-on-hover' src='./icone_3.png' alt='icone para download do book'/></a>
                        <p>Aproveite seu interesse e baixe o book do empreendimento<br/><strong>(Clique no ícone</strong>)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ObrigadoMainSection