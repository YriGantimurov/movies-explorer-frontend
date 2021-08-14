import { Link } from "react-router-dom";
import logo from '../../../images/logo.png'
import { useHistory } from 'react-router-dom'

function SignUp() {
    const history = useHistory();

    const handleIsValid = (e)=>{
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
            <h2 className="identification__title">Добро пожаловать!</h2>
            <form id="identification__sign-up-form" className="identification__form" onSubmit={(e) => { e.preventDefault(); history.push('/signin') }}>
                <p className="identification__input-title">Имя</p>
                <input onChange={(e)=> handleIsValid(e)} className="identification__input" type="text" required  minLength="3" maxLength="20"/>
                <p className="identification__error-massage">Что-то пошло не так...</p>
                <p className="identification__input-title">E-mail</p>
                <input onChange={(e)=> handleIsValid(e)} className="identification__input" type="email" required />
                <p className="identification__error-massage">Что-то пошло не так...</p>
                <p className="identification__input-title">Пароль</p>
                <input onChange={(e)=> handleIsValid(e)} className="identification__input" type="password" minLength="8" maxLength="20" required />
                <p className="identification__error-massage">Что-то пошло не так...</p>
            </form>
            <figure className="identification__sign-in">
                <button form="identification__sign-up-form" className="identification__submit-button">Зарегестрироваться</button>
                <p className="identification__paragraph">Уже зарегистрированы?</p>
                <Link className="identification__sign-in-button" to="/signin">Войти</Link>
            </figure>
        </section>
    )
}

export default SignUp;