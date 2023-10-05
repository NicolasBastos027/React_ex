import styled from "styled-components"

const textoOpcoes = ['CATEGORIAS', 'MINHAESTANTE', 'FAVORITOS']

const Opcao = styled.ul`
display: flex;
`
const Opcoes = styled.li`
min-width: 120px;
font-size: 16px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
height: 100%;
padding: 0 5px;
cursor: pointer;
`

function opcoes_header() {
    return (<Opcao>
            {textoOpcoes.map((texto) => (
        <Opcoes><p>{texto}</p></Opcoes>
 ))}
    </Opcao>)
}
export default opcoes_header