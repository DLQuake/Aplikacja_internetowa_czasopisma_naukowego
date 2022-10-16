import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header__logo">LOGO</div>

            <nav className="navigation">
                <button className="navigation__hamburger">
                    burger
                </button>

                <ul className="navigation__list">
                    <li><Link to="/" className="navigation__list-item">Strona Główna</Link></li>
                    <li><Link to="/o_nas" className="navigation__list-item">O nas</Link></li>
                    <li><Link to="/informacje_dla_autorow" className="navigation__list-item">Informacje dla autorów</Link></li>
                    <li><Link to="/kontakt" className="navigation__list-item">Kontakt</Link></li>
                    <li><Link to="/zarejestruj_sie" className="navigation__list-item">Zarejestruj się</Link></li>
                    <li><Link to="/zaloguj_sie" className="navigation__list-item">Zaloguj się</Link></li>
                </ul>
            </nav>

            <div className="search">
                <div className="search__look">
                    <input className="search__look-input" type="text" placeholder="Co chcesz wyszukać?" />
                    <button className="search__look-button">Szukaj</button>
                </div>
                <Link className="search__link" to="/filtrowanie">Filtrowanie</Link>
            </div>
        </header>

    );
}

export default Header