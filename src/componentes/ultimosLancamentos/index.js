import { Livros } from "./DadosUltimosLancamentos"
import styled from "styled-components"
import { Titulo } from "../Titulo"
import CardRecomenda from "../card_recomenda"
import imagemLivro from '../../imagens/livro2.png'

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
        <Titulo cor='#EB9B00' tamanhoFonte='36px' alianhamento='center'>ÚLTIMOS LANÇAMENTOS</Titulo>
        <NovosLivrosContainer>
        {Livros.map ( livro => (
            <img src={livro.src}/>
        ))} 
        </NovosLivrosContainer> 
        <CardRecomenda 
        titulo="Talvez você se interesse por" 
        subtitulo='Angular 11'
        descricao="construindo uma aplicação integrada com a plataforma Google."
        img={imagemLivro}
        />
        </UltimosLancamentosContainer>
    )
}
export default UltimosLancamentos