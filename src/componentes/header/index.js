import Logo from '../../componentes/logo'
import OpcoesHeader from '../../componentes/opcoes_header'
import Icones from '../../componentes/icones'
import styled from 'styled-components'

const HeaderContainer = styled.div `
    display: flex;
    background-color: #ffff;
    justify-content: center;

`

function Header(){
    return(
        <HeaderContainer>
        <Logo/>
        <OpcoesHeader/>
        <Icones/>
      </HeaderContainer>
    )
}

export default Header
