import { useLocation } from 'react-router-dom';

function Footer() {
    const location = useLocation();

    if (location.pathname==='/signup' || location.pathname==='/signin' || location.pathname==='/page-not-found' || location.pathname==='/profile') return(<></>);
    return (
    <footer className="footer">
        <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__container">
            <p className="footer__paragraph"> &copy;2021. Гантимуров Юрий</p>
            <nav className="footer__nav-bar">
                <a className="footer__link" rel="noreferrer" target="_blank" href="https://praktikum.yandex.ru">Яндекс.Практикум</a>
                <a className="footer__link" rel="noreferrer" target="_blank" href="https://github.com/YriGantimurov">Github</a>
                <a className="footer__link" rel="noreferrer" target="_blank" href="https://soundcloud.com/mysounbi">SoundCloud</a>
            </nav>
        </div>
    </footer>
    );}
  
  export default Footer;