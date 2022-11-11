import '../App.css'
import '../Components/Politica de privacidade/PoliticaDePrivacidade.css'
import { Link } from 'react-router-dom'

function PoliticaDePrivacidade() {
    return (
        <div className='politicaDePrivacidade'>
            <div className='politicaDePrivacidade-header'>
                <img src='./icone diy.png' alt='Logo Diy Bela Vista' />
            </div>
            <div className='politicaDePrivacidade-area'>
                <h1>POLÍTICA DE PRIVACIDADE</h1>
                <h2>SITE: UNITY ENGENHARIA</h2>
                <ul>
                    <li>Esta Política de Privacidade da UNITY ENGENHARIA (“Política”) visa:</li>
                    <li>(i) reforçar nosso compromisso com a privacidade e segurança no tratamento das informações
                        coletadas de nossos clientes e outros titulares de dados;</li>
                    <li>(ii) demonstrar, de forma transparente e simples, quais são os dados tratados (conforme definido
                        abaixo) pela UNITY ENGENHARIA, a razão e a forma que utilizamos para coletar, armazenar,
                        processar, transferir e consultar os referidos dados;</li>
                    <li>(iii) apresentar como protegemos seus dados;</li>
                    <li>(iv) definir quando e como você pode controlar suas preferências de privacidade.</li>
                    <li><strong>1. Sobre a Política</strong></li>
                    <li>A Política de Privacidade da UNITY ENGENHARIA se aplica a todos os serviços, oferecidos pela
                        UNITY ENGENHARIA e que usam Dados Pessoais (conforme definido abaixo) de clientes, potenciais
                        clientes, colaboradores e/ou terceiros (“Titulares dos Dados”).</li>
                    <li>Ao acessar os serviços e produtos oferecidos pela UNITY ENGENHARIA você concorda e aceita
                        integralmente as disposições da Política.</li>
                    <li><strong>2. Definições</strong></li>
                    <li>Lei Geral de Proteção de Dados (LGPD): Lei Federal nº 13.709 que regula as atividades de Tratamento
                        de Dados Pessoais, inclusive nos meios digitais, por pessoa natural ou por pessoa jurídica de direito
                        público ou privado, com o objetivo de proteger os direitos fundamentais de liberdade e de privacidade e
                        o livre desenvolvimento da personalidade da pessoa natural.</li>
                    <li>Agentes de Tratamento: são aqueles responsáveis pelo Tratamento de Dados Pessoais e estão
                        separados em duas categorias: o Controlador e o Operador. O Controlador é a pessoa ou a empresa
                        responsável pelas decisões referentes ao Tratamento de Dados Pessoais. O Operador, por sua vez, é
                        a pessoa ou a empresa que realiza o Tratamento de Dados Pessoais em nome do Controlador,
                        seguindo as suas instruções.</li>
                    <li>Anonimização: técnica por meio da qual um dado perde a possibilidade de associação, direta ou
                        indireta, a um indivíduo, de modo que posteriormente é impossível a reidentificação mesmo que por
                        soluções técnicas.</li>
                    <li>Autoridade Nacional de Proteção de Dados Pessoais (ANPD): é o órgão da administração pública
                        federal com atribuições relacionadas à proteção de dados pessoais e da privacidade, incluindo a
                        fiscalização para o cumprimento da LGPD.</li>
                    <li>Cookies: é um arquivo pequeno que contém uma sequência de caracteres, criado e enviado pelos
                        websites ao seu computador sempre que você os visita. Eles ajudam a lembrar suas preferências e
                        personalizar seu acesso tornando sua navegação mais segura, rápida e agradável. Você consegue
                        configurar seu navegador para não aceitar cookies ou avisar quando um cookie estiver sendo enviado,
                        mas sem eles alguns recursos ou serviços do site podem ficar comprometidos e limitados.</li>
                    <li>Dados Pessoais: são conceituados na LGPD como as informações relacionadas a pessoa natural
                        identificada ou informações que permitem sua identificação como nome, endereço, CPF, RG,
                        documentos de identidade em geral, telefone, dentre outros.</li>
                    <li>Dados Sensíveis: são conceituados na LGPD como os Dados Pessoais sobre a origem racial ou étnica,
                        convicção religiosa, opinião política, filiação a sindicato ou organização de caráter religioso, filosófico
                        ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico quando vinculado a
                        uma pessoa natural.</li>
                    <li>Dispositivo: é o aparelho que pode ser usado para acessar os serviços oferecidos pela UNITY
                        ENGENHARIA, como computadores desktop, tablets e smartphones.</li>
                    <li>Encarregado pela Proteção de Dados Pessoais: é o responsável por assegurar que a UNITY
                        ENGENHARIA, esteja em conformidade com as leis e regulações de privacidade, garantir a proteção
                        de Dados Pessoais e por ser a interface de comunicação com a ANPD e com os Titulares dos Dados.</li>
                    <li>Endereço IP: é o número atribuído a cada Dispositivo conectado à Internet, conhecido como endereço
                        de protocolo de internet (Internet Protocol ou IP). Geralmente, esses números são atribuídos em blocos
                        geográficos. Um endereço IP pode ser usado para identificar, por exemplo, de qual local um Dispositivo
                        está se conectando à Internet.</li>
                    <li>Geolocalização: recurso que, quando ativado pelo Titular dos Dados, permite definir a posição precisa
                        ou aproximada de um Dispositivo e traz informações como o país, estado, cidade e rua onde esse
                        Dispositivo se encontra, fornecendo, ainda, o horário em que foi acessado.</li>
                    <li>Titular dos Dados: qualquer pessoa física identificada ou identificável a quem se referem os dados
                        pessoais tratados. São, por exemplo, nossos clientes, potenciais clientes, correntistas, colaboradores,
                        terceiros, prestadores de serviços, candidatos a vagas, dentre outros.</li>
                    <li>Tratamento: qualquer operação realizada com os Dados Pessoais de forma automatizada ou não. Ou
                        seja, é a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão,
                        distribuição, processamento, armazenamento, arquivamento, eliminação, avaliação ou controle da
                        informação, modificação, comunicação, transferência, difusão ou extração.</li>
                    <li><strong>3. Sobre as Informações Tratadas pela UNITY ENGENHARIA</strong></li>
                    <li>Tratamos suas informações para desenvolver e aprimorar os nossos produtos e serviços.</li>
                    <li>Poderemos usar as informações coletadas sobre você para: responder suas consultas e solicitações;
                        manter você informado sobre nossos serviços através de SMS, MMS, mala-direta, aplicativos de
                        comunicação (como, por exemplo, o WhatsApp), entre outros recursos; desenvolver novos produtos e
                        aperfeiçoar/melhorar nosso negócio; e usar os seus dados para fins analíticos e estatísticos.</li>
                    <li>Contamos algumas bases legais para coletar e processar suas informações: (a) mediante
                        consentimento; (b) cumprimento de obrigação legal; (c) para execução de contrato ou de
                        procedimentos preliminares; (c) para o exercício regular de direitos em processo judicial, administrativo
                        ou arbitral; e (d) atender aos interesses legítimos da empresa.</li>
                    <li>Diferentes informações são coletadas quando você acessa nosso site e elas se enquadram em três
                        categorias:</li>
                    <li>Dados fornecidos pelo Titular de Dados: são as informações fornecidas por você ao interagir, contratar
                        ou utilizar quaisquer produtos ou serviços fornecidos pela UNITY ENGENHARIA, tais como: Nome, e-mail, número de telefone, CPF, endereço, profissão, estado civil, imagem dos seus documentos de
                        identidade oficiais ou quaisquer outros Dados Pessoais fornecidos para criar ou alterar sua conta digital
                        ou para simular, contratar ou cancelar qualquer produto ou serviço fornecido pela UNITY
                        ENGENHARIA. A UNITY não possui qualquer responsabilidade pela veracidade dos dados fornecidos,
                        bem como por eventuais danos decorrentes da inexatidão e/ou desatualização de referidas
                        informações.</li>
                    <li>Dados coletados durante o uso do website (navegação): são as informações coletadas pela UNITY
                        ENGENHARIA quando você navega e/ou utiliza os serviços da UNITY ENGENHARIA:</li>
                    <li>
                        <ul>
                            <li>Dados de navegação: são as informações que coletamos sobre as suas interações com o
                                website, tais como: histórico de pesquisas, histórico de navegação, datas e horários de acesso,
                                recursos utilizados, a forma com que utiliza os produtos e serviços e outras atividades do
                                sistema. Essas informações são importantes para um melhor desempenho das funcionalidades
                                disponibilizadas no site e para possibilitar a exibição de conteúdos relevantes pra você. Em
                                alguns casos, podemos fazer essa coleta por meio de Cookies, ferramentas importantes para o
                                perfeito funcionamento de nossos serviços. Assim, você deve estar ciente de que, caso opte
                                por recusar ou remover os Cookies, poderá ter a disponibilidade e a funcionalidade dos
                                serviços da UNITY ENGENHARIA afetadas. Para saber mais, consulte nossa Política de
                                Cookies.</li>
                            <li>Dispositivos: Coletamos, também, informações sobre o Dispositivo que você utiliza para
                                acessar o Website, tais como: marca, sistema operacional, endereço de IP, tipo de conexão de
                                rede (WI-FI, 3G, LTE, Bluetooth ou outros), desempenho da rede e do Dispositivo, tipo de
                                navegador e idioma. Estas informações são necessárias para garantir a compatibilidade de
                                nossos serviços com o Dispositivo que você utiliza e, assim, permitir uma melhor experiência.</li>
                            <li>Geolocalização: são as informações que coletamos sobre sua localização que nos permite
                                garantir maior segurança para suas transações com base nos pontos de localização geográfica
                                (antifraude); identificar a origem de uma chamada recebida em nossos canais de atendimento.
                                Conseguimos determinar sua localização por meio de GPS (abertura da conta, rastreio da
                                origem da chamada, uso de cartão, busca por terminais bancários); ou Endereço IP (acesso ao
                                chat). É possível ativar ou desativar o rastreio de sua localização acessando a opção
                                Ajustes/Privacidade do seu Dispositivo.</li>
                        </ul>
                    </li>
                    <li>Dados coletados de outras fontes: são as informações coletadas pela UNITY ENGENHARIA de
                        empresas terceirizadas parceiras, fornecedores e prestadores de serviços, respeitando as finalidades
                        previstas nesta Política. Essas empresas podem mudar conforme os serviços oferecidos pela UNITY
                        ENGENHARIA e as informações coletadas.</li>
                    <li>A UNITY ENGENHARIA poderá utilizar os dados fornecidos ou coletados, conforme acima, para enviar
                        publicidade e propaganda por e-mail ou por qualquer outro meio de comunicação, respeitando os itens
                        6, 7 e 9 desta Política.</li>
                    <li><strong>4. Objetivos da Coleta de Dados Pessoais</strong></li>
                    <li>Os Dados Pessoais coletados, nos termos da presente Política, são utilizados para as seguintes
                        finalidades:</li>
                    <li>
                        <ul>
                            <li className='bolinhaLista'>fornecer a você nossos produtos e serviços;</li>
                            <li className='bolinhaLista'>para notificá-lo sobre eventuais alterações em nossos produtos e serviços;</li>
                            <li className='bolinhaLista'>reforçar nossos procedimentos de segurança e proteção, visando a prestação de um serviço mais
                                seguro e eficaz;</li>
                            <li className='bolinhaLista'>administrar nossa prestação de serviços e/ou fornecimento de produtos;</li>
                            <li className='bolinhaLista'>melhorar e aperfeiçoar nossos serviços e produtos, garantindo que eles sejam apresentados da
                                maneira mais eficaz a você;</li>
                            <li className='bolinhaLista'>avaliar ou entender a eficácia da publicidade que veiculamos, visando fornecer publicidades relevantes
                                para você;</li>
                            <li className='bolinhaLista'>permitir que você participe de recursos interativos de nossos serviços, quando você optar por fazê-lo;</li>
                            <li className='bolinhaLista'>fornecer informações sobre outros serviços e/ou produtos que oferecemos;</li>
                            <li className='bolinhaLista'>ofertar produtos ou serviços adequados e relevantes aos seus interesses;</li>
                            <li className='bolinhaLista'>produzir provas e auxiliar na condução de processos jurídicos, administrativos ou arbitrais, bem como
                                auxiliar no cumprimento de outros requisitos legais; e</li>
                            <li className='bolinhaLista'>tomar decisões automatizadas com relação ao uso dos nossos serviços.</li>
                        </ul>
                    </li>
                    <li>Caso você queira saber mais detalhes sobre como os seus Dados Pessoais serão tratados pela UNITY
                        ENGENHARIA com base nas finalidades descritas nesse item, entre em contato conosco por meio dos
                        nossos canais de atendimento 11 3257-1717.</li>
                    <li>Todos os dados que você nos fornece ativamente ou que coletamos são considerados confidenciais.
                        Assim, nos comprometemos a adotar todas as medidas técnicas e administrativas aptas a proteger
                        seus Dados Pessoais, observando, por exemplo, as diretrizes sobre padrões de segurança
                        estabelecidas na legislação vigente.</li>
                    <li><strong>5. Duração do Tratamento dos Dados Pessoais</strong></li>
                    <li>O prazo de Tratamento dos seus Dados Pessoais pela UNITY ENGENHARIA variará de acordo:</li>
                    <li>
                        <ul>
                            <li className='bolinhaLista'>com os tipos de produtos e serviços contratados/prestados/fornecidos;</li>
                            <li className='bolinhaLista'>com as finalidades do Tratamento;</li>
                            <li className='bolinhaLista'>com as disposições contratuais e legais em questão.</li>
                        </ul>
                    </li>
                    <li>Assim, os Dados Pessoais serão excluídos pela UNITY ENGENHARIA, exceto se seu armazenamento
                        deva ser feito em razão de obrigação legal ou regulamentar, quando:</li>
                    <li>
                        <ul>
                            <li className='bolinhaLista'>a finalidade para a qual a informação foi coletada seja alcançada ou quando os Dados Pessoais
                                deixarem de ser necessários ou pertinentes para o alcance desta finalidade;</li>
                            <li className='bolinhaLista'>quando houver revogação do consentimento;</li>
                            <li className='bolinhaLista'>mediante determinação de autoridade competente para tanto.</li>
                        </ul>
                    </li>
                    <li><strong>6. Direitos do Titular dos Dados Pessoais</strong></li>
                    <li>A LGPD confere uma série de direitos aos Titulares dos Dados. Sendo assim, você, como Titular dos
                        Dados, pode fazer as solicitações à UNITY ENGENHARIA, conforme detalhado na tabela abaixo:</li>
                    <li>Confirmação da existência de Tratamento: você pode solicitar à UNITY ENGENHARIA que confirme
                        que os seus Dados Pessoais estão sendo tratados e qual o tipo de tratamento que está sendo feito.</li>
                    <li>Acesso aos seus Dados Pessoais: Você pode solicitar à UNITY ENGENHARIA um resumo dos Dados
                        Pessoais que coletamos, com informações de como eles são tratados e com qual finalidade.
                        Forneceremos, por meios eletrônicos ou físicos, uma cópia dos Dados Pessoais que mantemos sobre
                        você. Não podemos fornecer Dados Pessoais de terceiros.</li>
                    <li>Correção de seus Dados Pessoais: Você pode editar, solicitar a correção ou atualização de seus
                        Dados Pessoais, quando estes estiverem errados, incompletos ou desatualizados. Antes de
                        atualizarmos seus Dados Pessoais, podemos solicitar documentos e/ou informações que comprovem
                        as novas informações que você forneceu.</li>
                    <li>Solicitar a anonimização, bloqueio ou eliminação dos seus Dados Pessoais: Você pode solicitar que
                        seus Dados Pessoais sejam anonimizados, bloqueados ou que sejam eliminados das bases da UNITY
                        ENGENHARIA. Você poderá nos solicitar a eliminação dos Dados quando: (i) acredita que não há
                        razão para continuarmos a usá-los; (ii) deseja retirar o consentimento (permissão) que nos deu em um primeiro momento; (iii) se opõe ao nosso uso das informações; (iv) você considera que usamos as
                        informações ilegalmente; o (v) a lei exige que excluamos as informações. Nós não atenderemos a sua
                        solicitação de eliminação quando a UNITY ENGENHARIA deva armazenar tais Dados Pessoais, em
                        razão de obrigação legal ou regulamentar.</li>
                    <li>Portabilidade de seus Dados Pessoais: Você pode solicitar a migração das informações cadastradas no
                        Website da UNITY ENGENHARIA para outra organização. O atendimento desta solicitação, pelo
                        UNITY ENGENHARIA, irá considerar as disposições legais vigentes e os Dados Pessoais, quando
                        fornecidos, serão de forma estruturada, em um formato comumente usado e legível pelos sistemas.
                        Não podemos compartilhar Dados Pessoais que sejam sigilo ou segredo de negócios.</li>
                    <li>Informações sobre o compartilhamento dos seus Dados Pessoais: Você pode solicitar informações
                        sobre com quem (terceiros ou parceiros) a UNITY ENGENHARIA compartilha seus Dados Pessoais
                        foram compartilhados.</li>
                    <li>Possibilidade de não fornecimento do consentimento: Caso você se recuse a fornecer à UNITY
                        ENGENHARIA o consentimento para acesso ou Tratamento de seus Dados Pessoais, nós te
                        informaremos sobre as consequências desta recusa que, em algumas situações, pode inviabilizar a
                        prestação dos nossos serviços.</li>
                    <li>Revogar consentimentos: Se você consentiu com o Tratamento de seus Dados Pessoais, você poderá,
                        a qualquer momento, cancelar tal consentimento. Reforçamos que será lícito usarmos os seus Dados
                        Pessoais até o momento da revogação do consentimento, bem como será lícito o arquivamento desses
                        Dados Pessoais por prazo superior ao do tratamento, sempre que for necessário para cumprimento de
                        obrigação legal ou regulatória por parte da UNITY ENGENHARIA. De qualquer forma, ao revogar
                        consentimentos, você tem ciência de que este ato poderá inviabilizar a prestação de nossos serviços.</li>
                    <li>Oposição ao processamento dos seus Dados Pessoais: Você pode se opor ao Tratamento dos seus
                        Dados Pessoais quando este estiver em desacordo ou descumprindo qualquer determinação da LGPD.</li>
                    <li>Revisão de decisão automatizada: Você pode solicitar que decisões tomadas unicamente com base em
                        Tratamento automatizado de Dados Pessoais que afetem seus interesses sejam revistas. Tal revisão,
                        porém, não implica necessariamente que a decisão automatizada seja revista na forma pretendida pelo
                        Titular dos Dados.</li>
                    <li>Para exercer qualquer um dos seus direitos estabelecidos acima, bem como determinar suas
                        preferências no tratamento e utilização pela UNITY ENGENHARIA de alguns de seus dados pessoais,
                        você pode acessar os Canais de Atendimento da UNITY ENGENHARIA. Você receberá uma resposta
                        em, no máximo, 15 (quinze) dias contados da data da sua solicitação.</li>
                    <li>Por motivos de segurança, somente poderemos atender à sua solicitação se tivermos certeza da sua
                        identidade. Sendo assim, poderemos solicitar dados ou informações adicionais para a confirmação da
                        identidade e da autenticidade do requisitante.</li>
                    <li><strong>7. Compartilhamento dos Dados Pessoais</strong></li>
                    <li>A UNITY ENGENHARIA zela pela privacidade dos seus dados e, em conformidade com as normas de
                        proteção de dados, somente compartilha suas informações para as finalidades previstas nesta Política
                        de Privacidade. Podemos compartilhar suas informações com os terceiros abaixo relacionados:</li>
                    <li>
                        <ul>
                            <li className='bolinhaLista'>entre as empresas do Grupo UNITY ENGENHARIA (compreendendo tal grupo para os efeitos desta
                                Política, empresas que contem com partes relacionadas em comum, subsidiárias, controladas e
                                controladoras);</li>
                            <li className='bolinhaLista'>com parceiros comerciais, prestadores de serviços, fornecedores e subcontratados para a perfeita e
                                correta execução de contratos celebrados junto a eles ou a você;</li>
                            <li className='bolinhaLista'>com empresas de publicidade e marketing, para selecionar e veicular anúncios relevantes para você,
                                conforme autorizado; e</li>
                            <li className='bolinhaLista'>com os provedores de mecanismos de pesquisa e análises, para auxiliar em melhorias e otimizações
                                do website.</li>
                        </ul>
                    </li>
                    <li>Podemos, ainda, divulgar suas informações pessoais a terceiros:</li>
                    <li>
                        <ul>
                            <li className='bolinhaLista'>em caso de transações e alterações societárias envolvendo qualquer empresa do Grupo UNITY
                                ENGENHARIA, hipótese em que a transferência de dados será necessária para a continuidade dos
                                serviços ora ofertados;</li>
                            <li className='bolinhaLista'>em cumprimento à legislação vigente;</li>
                            <li className='bolinhaLista'>em cumprimento de Contratos ou outros acordos junto aos nossos titulares de dados;</li>
                            <li className='bolinhaLista'>para proteção dos interesses da UNITY ENGENHARIA em casos de demandas e conflitos, inclusive em
                                processos judiciais, administrativos e arbitrais;</li>
                            <li className='bolinhaLista'>mediante ordem judicial ou por requerimento de autoridades administrativas competentes que
                                detenham a competência legal para sua requisição.</li>
                        </ul>
                    </li>
                    <li>Não se preocupe, pois qualquer compartilhamento de informações é feito estritamente na medida
                        necessária e seguindo padrões rígidos de segurança e confidencialidade, bem como as normas de
                        sigilo bancário e demais leis e normas de proteção à privacidade, sempre respeitando e fazendo com
                        que os terceiros respeitem a confidencialidade das suas informações.</li>
                    <li>Caso você deseje obter mais informações sobre os terceiros com quem compartilhamos seus Dados
                        Pessoais, entre em contato conosco por meio dos nossos canais de atendimento.</li>
                    <li><strong>9. Canais de Atendimento para Assuntos de Privacidade</strong></li>
                    <li>Para assuntos relacionados à Privacidade, você pode acionar nossos canais de atendimento,
                        funcionando em dias úteis das 10:00 hs às 12:30 hs e das 13:30 hs às 17:00 hs, pelo telefone de
                        atendimento +55 11 3257-1717, e-mail de atendimento juridico@unityengenharia.com e canal de
                        conversa na página web https://www.unityengenharia.com.br.</li>
                    <li><strong>10. Como registrar interesse em trabalhar na UNITY ENGENHARIA</strong></li>
                    <li>O site da UNITY ENGENHARIA possibilita que você registre o seu interesse em trabalhar ou
                        candidatar-se a uma vaga anunciada. Para mais detalhes sobre o processo de recrutamento e as
                        informações necessárias, acesse nossa página de “Carreiras” em cada uma das unidades de negócio.</li>
                    <li><strong>10. Disposições Gerais</strong></li>
                    <li>Os termos desta Política poderão ser modificados a qualquer momento, em razão de alterações
                        legislativas ou nos produtos ou serviços que prestamos ou, quando necessário, a nosso critério, como
                        por exemplo em razão da oferta de novos produtos ou serviços. Quando realizarmos alterações
                        relevantes, os Titulares dos Dados serão notificados por meio de aviso no Website, e-mail ou por
                        qualquer outro meio de comunicação disponível, a critério da UNITY ENGENHARIA. Certifique-se de
                        ler atentamente qualquer aviso desta natureza.</li>
                    <li>Suas informações serão sempre processadas em conformidade com esta Política. Nunca reduziremos
                        seus direitos estabelecidos nesta Política sem seu consentimento explícito e em desconformidade com
                        a Lei de Proteção de Dados.</li>
                    <li>Qualquer cláusula ou condição desta Política que, por qualquer razão, venha a ser reputada nula ou
                        ineficaz por qualquer juízo ou tribunal, não afetará a validade das demais disposições desta Política, as
                        quais permanecerão plenamente válidas e vinculantes, gerando efeitos em sua máxima extensão.
                        A falha da UNITY ENGENHARIA em exigir quaisquer direitos ou disposições desta Política não
                        constituirá renúncia, podendo este exercer regularmente o seu direito, dentro dos prazos legais.</li>
                    <li>Esta Política é regida exclusivamente pelas Leis da República Federativa do Brasil, bem como
                        eventuais ações decorrentes de violação destes Termos.</li>
                    <li>A utilização dos nossos serviços implicará em expressa aceitação quanto aos termos e condições da
                        Política de Privacidade vigente na data de sua utilização. Para os titulares de dados que não
                        concordem com a Política de Privacidade vigente, recomendamos a não utilização dos nossos produtos
                        ou serviços. A não aceitação ou a recusa em disponibilizar as informações solicitadas, pode impedir a
                        prestação de tais produtos ou serviços.</li>
                    <li><strong>11. Lei Aplicável e Resolução de Conflitos</strong></li>
                    <li>Esta declaração de privacidade não se aplica a crianças. Entendemos a importância de proteger as
                        informações sobre crianças, especialmente em ambiente on-line, e não coletamos ou mantemos
                        deliberadamente informações sobre crianças.</li>
                    <li>Toda e qualquer controvérsia oriunda dos termos expostos na presente Política de Privacidade serão
                        solucionados de acordo com a lei brasileira, sendo competente o foro da cidade de São Paulo - SP,
                        com exclusão de qualquer outro por mais privilegiado que seja.</li>
                    <li>A utilização de serviços e/ou ordens comandadas fora do território brasileiro, conforme o caso, ou ainda
                        as decorrentes de operações iniciadas no exterior podem estar sujeitas também à legislação e
                        jurisdição das autoridades dos países onde forem comandadas ou iniciadas.</li>
                    <li><strong>12. Cancelamento de cadastro</strong></li>
                    <li>A UNITY ENGENHARIA permite que você faça opções quanto à coleta e o uso de suas informações de
                        identificação pessoal. Se você se cadastrou para receber as novidades da UNITY ENGENHARIA no
                        site unityengenharia.com.br, mas não gostaria de receber mais e- mails, visite nossa página de
                        cancelamento de cadastro.</li>
                </ul>
            </div>
            <Link to='/' className='botao-amarelo'>Home</Link>
        </div>
    )
}

export default PoliticaDePrivacidade