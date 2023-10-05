import logoimg from '../..//imagens/logo.svg'
import styled from 'styled-components';

const LogoConstainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
font-size: 30px;
`
const LogoImg = styled.img`
    margin-right: 10px;
`

function logo() {
    return (
        <LogoConstainer>
            <LogoImg src={logoimg} alt='logo'/>
            <p><strong>Alura</strong>Books</p>
        </LogoConstainer>
    );
}
export default logo