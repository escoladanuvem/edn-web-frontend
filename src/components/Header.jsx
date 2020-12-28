import Logo from '../images/logo.svg'
import '../styles/components/header.css'

function Header() {
    return (
        <header className='app-navbar'>
            <img src={Logo} alt='Escola da Nuvem logo' />
            <ul>
                <li>
                    Início
                </li>
                <li>
                    Cursos
                </li>
                <li>
                    Contato
                </li>
                <li>
                    Sobre
                </li>
                <li>
                    Quem Somos
                </li>
            </ul>
        </header>
    )
}

export default Header;