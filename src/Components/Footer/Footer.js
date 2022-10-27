import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-area'>
                <div className='footer-text-area'>
                    <div className='footer-dwIncorp'>
                        <img src='./UNITY_LOGO.png' />
                        <p>Imagens preliminares sujeitas a alteração. As unidades autônomas e áreas comuns do
                            empreendimento serão entregues conforme Projeto Legal, Memorial de Incorporação e

                            Memorial Descritivo de Acabamento do empreendimento, que prevalecerão em caso de conflito
                            com qualquer outro material ou informação relativa ao empreendimento. Os empreendimentos
                            serão comercializados por profissionais credenciados no Creci. A DW Incorp atua com parceria
                            de corretores de imóveis da região. Para estas ou mais informações, entre em contato
                            conosco.</p>
                    </div>
                    <div className='footer-contatos'>
                        <ul>
                            <li><strong>Central de vendas:</strong></li>
                            <li>11 95186-7047</li>
                        </ul>
                        <ul>
                            <li><strong>Atendimento ao cliente:</strong></li>
                            <li>11 3257-1717</li>
                        </ul>
                        <ul>
                            <li>contato@unityengenharia.com</li>
                        </ul>
                        <ul>
                            <li><strong>Horário de atendimento</strong></li>
                            <li>de segunda à sexta feira 9:00h às 18:00h</li>
                        </ul>
                        <div className='footer-icons'>
                        <a href='https://www.instagram.com/unityengenhariabr/'><i className="fa-brands fa-instagram"></i></a>
                        <a href='https://www.facebook.com/unityengenhariabr'><i className="fa-brands fa-facebook-f"></i></a>
                        <a href='https://www.linkedin.com/company/unityincorporadora/'><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className='footer-copy'>
                    <a href='#'>Politica De Privacidade</a>
                    <a href='#'>2022 Copyright - Todos os direitos reservados.</a>
                    <a href='#'>Fale Conosco</a>
                </div>
            </div>
        </div>
    )
}

export default Footer