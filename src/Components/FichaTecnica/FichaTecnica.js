import "./FichaTecnica.css"

function FichaTecnica() {
    return (
        <div className="fichaTecnica">
            <div className="fichaTecnica-box">
                <h1>Ficha Técnica</h1>
                <div className="fichaTecnica-area">
                    <div className="fichaTecnica-area-endereco">
                        <div className="fichaTecnica-area-itens">
                            <ul className="enderecos-lista">
                                <li>Tipo de torre:</li>
                                <li>Residencial + Loja</li>
                            </ul>
                            <ul className="enderecos-lista">
                                <li>Área do terreno:</li>
                                <li>1.076m²</li>
                            </ul>
                            <ul className="enderecos-lista">
                                <li>Área total construída:</li>
                                <li>10.485m²</li>
                            </ul>
                            <ul className="enderecos-lista">
                                <li>Projeto de Arquitetura:</li>
                                <li>Gkalili Arquitetura</li>
                            </ul>
                            <ul className="enderecos-lista">
                                <li>Projeto de Interiores:</li>
                                <li>Cube Decor</li>
                            </ul>
                            <ul className="enderecos-lista">
                                <li>Projeto de Paisagismo:</li>
                                <li>Calux Jardins | CP Projetos</li>
                            </ul>
                        </div>
                        <div className="fichaTecnica-area-itens">

                            <ul className="enderecos-lista">
                                <li>Número de pavimentos e unidades por andar</li>
                                <ul>
                                    <li>25 pavimentos, sendo:</li>
                                    <li>2 subsolos (garagens)</li>
                                    <li>Térreo (acessos, loja e garagem)</li>
                                    <li>Mezanino (loja e áreas de lazer)</li>
                                    <li>1° ao 11° (14 finais por pavimento)</li>
                                    <li>12° ao 13° (12 finais por pavimento)</li>
                                    <li>14° ao 18° (7 finais por pavimento)</li>
                                    <li>19° ao 20° (5 finais por pavimento)</li>
                                    <li>21° (área de lazer)</li>
                                    <li>22° (área de lazer, ático e cobertura)</li>
                                </ul>
                            </ul>
                            <ul className="enderecos-lista">
                                <li>Total de Unidades</li>
                                <ul>
                                <li>224 unidades, sendo:</li>
                                <li>1 loja</li>
                                <li>192 unidades Studios</li>
                                <li>31 unidades 1 dorm</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FichaTecnica