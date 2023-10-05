import styled from 'styled-components'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import 'styled-components'

const icones = [perfil,sacola]

const Icones =styled.div`
display: flex;
align-items: center;
` 
const Icone = styled.div`
margin-right: 40px;
width: 25px;
`

function IconesHeader(){
    return(
        <Icones>
          {icones.map((icones) => (
            <Icone> <img src={icones}></img> </Icone>
          ))}
        </Icones>
    )
}
export default IconesHeader