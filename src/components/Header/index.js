import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Função para alternar o estado do menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header>
            <nav>
                <Link to='/'>
                    <img src='../../assets/logo_pokedex.svg' alt='Logo Pokedex' className="logo" />
                </Link>
                <div className="icons-menu" onClick={toggleMenu}>
                    <img src='../../icons_menu.svg' alt='Menu Icon' />
                </div>
                <ul className={`menu-list ${menuOpen ? 'open' : ''}`}>
                    <li onClick={toggleMenu}>
                        <Link to='/pokemons' className="menu-item">
                            <img src='../../assets/pikachu_icon.svg' alt='Icone Pikachu' className="icon" />
                            <p className='destaque'>Pokemons</p>
                        </Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link to='/sobre' className="menu-item">
                            <p className='destaque'>Sobre</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
