import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to='/'><img src='../../assets/logo_pokedex.svg'/></Link>
                <ul>
                    <li>
                        <img src='../../assets/pikachu_icon.svg' />
                        <p className='destaque'>Pokemons</p>
                    </li>
                    <li><p className='destaque'>Sobre</p></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;