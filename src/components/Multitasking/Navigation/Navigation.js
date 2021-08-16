import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

function NavMenu() {
    const location = useLocation();
    const handleContextMenu = () => {
        const menu = document.querySelector('.menu')
        menu.setAttribute('class', 'menu menu_display_grid')
    }
    const [width, setWidth] = React.useState(window.innerWidth);

    window.addEventListener(`resize`, event => {
        setWidth(window.innerWidth)
    })

    if (width < 769 && location.pathname !== "/") return (
        <nav className="header__menu">
            <button onClick={() => handleContextMenu()} className="header__menu-button header__menu-button_value_context-menu"></button>
        </nav>)
    return (
        (location.pathname === "/")
            ? <nav className="header__menu">
                <Link className="header__menu-button" to="/signup">Регистрация</Link>
                <Link className="header__menu-button header__menu-button_value_signin-button" to="/signin">Войти</Link>
            </nav>
            : <nav className="header__menu">
                <NavLink to="/movies" activeClassName="header__menu-button_is-active_active" className="header__menu-button" >Фильмы</NavLink>
                <NavLink to="/saved-movies" activeClassName="header__menu-button_is-active_active" className="header__menu-button" >Сохранённые фильмы</NavLink>
                <NavLink to="/profile" activeClassName="header__menu-button_is-active_active" className="header__menu-button header__menu-button_value_account"><div className="header__account-image"></div>Аккаунт</NavLink>
            </nav>
    );
}

export default NavMenu;