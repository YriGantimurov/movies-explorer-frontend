import { Link, useHistory } from "react-router-dom";
import logo from '../../../images/logo.png'

function SignIn() {
    const history = useHistory();

    const handleIsValid = (e) => {
        if (!e.target.validity.valid) {
            e.target.nextSibling.setAttribute('class', 'identification__error-massage identification__error-massage_type_error')
            e.target.setAttribute('class', 'identification__input identification__input_type_error')
        }
        else {
            e.target.nextSibling.setAttribute('class', 'identification__error-massage')
            e.target.setAttribute('class', 'identification__input')
        }
    }

    return (
        <section className="identification">
            <img alt="Логотип сайта" className="identification__logo" src={logo} onClick={() => history.push('/')} />
            <h2 className="identification__title">Рады видеть!</h2>
            <form id="identification__sign-in-form" className="identification__form" onSubmit={(e) => { e.preventDefault(); history.push('/movies') }}>
                <p className="identification__input-title">E-mail</p>
                <input placeholder="E-mail" onChange={(e) => handleIsValid(e)} className="identification__input" type="email" required />
                <p className="identification__error-massage">Что-то пошло не так...</p>
                <p className="identification__input-title">Пароль</p>
                <input placeholder="Пароль" minLength="8" maxLength="20" onChange={(e) => handleIsValid(e)} className="identification__input" type="password" required />
                <p className="identification__error-massage">Что-то пошло не так...</p>
            </form>
            <figure className="identification__sign-in">
                <button form="identification__sign-in-form" className="identification__submit-button">Войти</button>
                <p className="identification__paragraph">Ещё не зарегистрированы?</p>
                <Link className="identification__sign-in-button" to="/signup">Зарегестрироваться</Link>
            </figure>
        </section>
    )
}

export default SignIn;