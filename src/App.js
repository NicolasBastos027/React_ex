import './App.css';
import Logo from './componentes/logo'
import OpcoesHeader from './componentes/opcoes_header'
import Icones from './componentes/icones'


function App() {
  return (
    <div className='app'>
      <header className='app_header'>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <Icones></Icones>
      </header>
    </div>
  );
}

export default App;
