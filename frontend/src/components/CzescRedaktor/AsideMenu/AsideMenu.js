import React from 'react';
import { Link } from 'react-router-dom';
import "./AsideMenu.css"

function clearAll() {
    window.localStorage.clear();
    window.sessionStorage.clear();
}


function AsideMenu() {

    return (
        <aside className='c-AsideMenu'>
            <div className="c-AsideMenu__logo">
                <div className="c-AsideMenu__logo-nazwaUzytkownika">Jan Kowalski</div>
                <div className="c-AsideMenu__logo-zalogowanyJako">REDAKTOR</div>
            </div>
            <ul className="c-AsideMenu__menu">
            <li onClick={clearAll}><Link className='c-AsideMenu__menu-item' to="/">Wyloguj się</Link></li>
                <li><Link className='c-AsideMenu__menu-item' to="/redaktor">Główny panel</Link></li>
                <li><Link className='c-AsideMenu__menu-item' to="/publikacje">Publikacje</Link></li>
            </ul>
        </aside>
    );
}

export default AsideMenu;