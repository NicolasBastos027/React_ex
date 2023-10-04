const textoOpcoes = ['CATEGORIAS', 'MINHAESTANTE', 'FAVORITOS']

function opcoes_header() {
    return (<ul className='opcoes'>
            {textoOpcoes.map((texto) => (
        <li className='opcao'><p>{texto}</p></li>
 ))}
    </ul>)
}
export default opcoes_header