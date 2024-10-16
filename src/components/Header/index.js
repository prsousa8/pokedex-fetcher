import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to='/'><img src='../../assets/logo_pokedex.svg' /></Link>
                <ul>
                    <Link to='/pokemons'><li>
                        <img src='../../assets/pikachu_icon.svg' />
                        <p className='destaque'>Pokemons</p>
                    </li>
                    </Link>
                    <Link to='/sobre'><li><p className='destaque'>Sobre</p></li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;