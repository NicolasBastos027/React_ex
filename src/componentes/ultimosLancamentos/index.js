import { Livros } from "./DadosUltimosLancamentos"
import styled from "styled-components"
import { Titulo } from "../Titulo"

const  UltimosLancamentosContainer = styled.section`
background-color: #EBECEE;
padding-bottom: 20px;
display: flex;
flex-direction: column;
`

const NovosLivrosContainer = styled.div`
margin-top: 30px;
display: flex;
width: 100%;
justify-content: center;
cursor: pointer;
`

function UltimosLancamentos (){
    return(
        <UltimosLancamentosContainer>
        <Titulo cor='#000'>ÚLTIMOS LANÇAMENTOS</Titulo>
        <NovosLivrosContainer>
        {Livros.map ( livro => (
            <img src={livro.src}/>
        ))} 
        </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    )
}
export default UltimosLancamentos