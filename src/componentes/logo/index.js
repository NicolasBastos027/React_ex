import logoimg from '../..//imagens/logo.svg'
import './style.css'


function logo() {
    return (
        <div className='logo'>
            <img src={logoimg} alt='logo' className='logoimg'></img>
            <p><strong>Alura</strong>Books</p>
        </div>
    );
}
export default logo