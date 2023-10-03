import './App.css';
import logo from './imagens/logo.svg'

function App() {
  return (
    <div className='app'>
      <header className='app-reader'>
        <div className='logo'>
          <img src={logo} alt='logo'></img>
          <p><strong>Alura</strong>Books</p>
        </div>
      </header>
    </div>
  );
}

export default App;
