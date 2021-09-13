import logoImg from '../../../images/logo.png';
import Navigation from '../Navigation/Navigation';
import { useHistory, useLocation } from 'react-router-dom';

function Header(props) {
    const location = useLocation();
    const history = useHistory();

    if (location.pathname==='/signup' || location.pathname==='/signin' || location.pathname==='/page-not-found') return(<></>);
    return (
        <header className="header">
            <img className="header__logo" alt="Логотип сайта на шапке" src={logoImg} onClick={()=>{history.push('/')}}/>
            <Navigation loggedIn={props.loggedIn} />
        </header>
    )
}

export default Header;
