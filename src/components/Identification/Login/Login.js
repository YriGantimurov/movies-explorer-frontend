import React, {useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import logo from '../../../images/logo.png'

function SignIn(props) {
    const history = useHistory();
    const [isInputsValid, setIsInputsValid] = React.useState(false)
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    useEffect(()=>{
        const form = document.querySelector('#identification__sign-in-form')
        const inputs = Array.from(form.querySelectorAll('.identification__input'))
        const isValid = inputs.every((input) => {
            return checkInputValidity(input)
        })
        setIsInputsValid(isValid)
    }, [email, password])

    const checkInputValidity = (input) => {
        if(!input.validity.valid){
            input.nextSibling.setAttribute('class', 'identification__error-massage identification__error-massage_type_error')
            input.setAttribute('class', 'identification__input identification__input_type_error')
            return false
        }
        else {
            input.nextSibling.setAttribute('class', 'identification__error-massage')
            input.setAttribute('class', 'identification__input')
            return true
        }
    }

    const handleChangeEmailInput = (e) => {
        setEmail(e.target.value)
        checkInputValidity(e.target);
    }
    const handleChangePasswordInput = (e) => {
        setPassword(e.target.value)
        checkInputValidity(e.target);
    }

    const login = () => {
        props.onLogin({
            email:email, 
            password:password})
    }

    return (
        <section className="identification">
            <img alt="Логотип сайта" className="identification__logo" src={logo} onClick={() => history.push('/')} />
            <h2 className="identification__title">Рады видеть!</h2>
            <form id="identification__sign-in-form" className="identification__form" onSubmit={(e) => { e.preventDefault(); login()}}>
                <p className="identification__input-title">E-mail</p>
                <input placeholder="E-mail" onChange={(e) => handleChangeEmailInput(e)} className="identification__input" type="email" required />
                <p className="identification__error-massage">Что-то пошло не так...</p>
                <p className="identification__input-title">Пароль</p>
                <input placeholder="Пароль" minLength="8" maxLength="20" onChange={(e) => handleChangePasswordInput(e)} className="identification__input" type="password" required />
                <p className="identification__error-massage">Что-то пошло не так...</p>
            </form>
            <figure className="identification__sign-in">
                <p className={`identification__error-massage ${props.isError ? "identification__error-massage_type_error": ""}`}>{props.loginError ? "Неверный логин или пароль" :"Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз" }</p>
                <button form="identification__sign-in-form" className={`identification__submit-button ${isInputsValid ? "" : "identification__submit-button_type_disable"}`}>Войти</button>
                <p className="identification__paragraph">Ещё не зарегистрированы?</p>
                <Link className="identification__sign-in-button" to="/signup">Зарегестрироваться</Link>
            </figure>
        </section>
    )
}

export default SignIn;