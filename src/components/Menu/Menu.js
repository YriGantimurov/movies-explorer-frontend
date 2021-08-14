import { Link, NavLink } from 'react-router-dom';

function Menu() {
    const handleCloseMenu = () => {
        const menu = document.querySelector('.menu')
        menu.setAttribute('class', 'menu')
    }

    return (
        <div className="menu">
            <nav className="menu__nav">
                <button className="menu__close-button" onClick={() => handleCloseMenu()}></button>
                <NavLink exact to="/" activeClassName="menu__nav-link_is-active_active" className="menu__nav-link">Главная</NavLink>
                <NavLink to="/movies" activeClassName="menu__nav-link_is-active_active" className="menu__nav-link">Фильмы</NavLink>
                <NavLink to="/saved-movies" activeClassName="menu__nav-link_is-active_active" className="menu__nav-link">Сохранённые фильмы</NavLink>
                <Link to="/profile" className="menu__nav-link menu__nav-link_value_account"><div className="menu__account-image"></div>Аккаунт</Link>
            </nav>
        </div>
    )
}

export default Menu;
