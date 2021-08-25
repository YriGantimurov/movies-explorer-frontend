import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../../../images/logo.png'
import { useHistory } from 'react-router-dom'

function SignUp(props) {
    const history = useHistory();
    const [isInputsValid, setIsInputsValid] = React.useState(false)
    const [userName, setUserName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    useEffect(()=>{
        const form = document.querySelector('#identification__sign-up-form')
        const inputs = Array.from(form.querySelectorAll('.identification__input'))
        const isValid = inputs.every((input) => {
            return checkInputValidity(input)
        })
        setIsInputsValid(isValid)
    }, [userName, email, password])

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

    const handleChangeNameInput = (e) => {
        setUserName(e.target.value)
        checkInputValidity(e.target);
    }
    const handleChangeEmailInput = (e) => {
        setEmail(e.target.value)
        checkInputValidity(e.target);
    }
    const handleChangePasswordInput = (e) => {
        setPassword(e.target.value)
        checkInputValidity(e.target);
    }

    const register = () => {
        props.onRegister({
            name:userName, 
            email:email, 
            password:password})
    }


    return (
        <section className="identification">
            <img alt="Логотип сайта" className="identification__logo" src={logo} onClick={() => history.push('/')} />
            <h2 className="identification__title">Добро пожаловать!</h2>
            <form id="identification__sign-up-form" className="identification__form" onSubmit={(e) => { e.preventDefault(); register()}}>
                <p className="identification__input-title">Имя</p>
                <input pattern="[A-Za-zА-Яа-я -]+$" id="name-input" placeholder="Имя" onChange={(e)=> handleChangeNameInput(e)} className="identification__input" type="text" required  minLength="3" maxLength="20"/>
                <p id="name-input-error" className="identification__error-massage">Что-то пошло не так...</p>
                <p className="identification__input-title">E-mail</p>
                <input id="email-input" placeholder="E-mail" onChange={(e)=> handleChangeEmailInput(e)} className="identification__input" type="email" required />
                <p id="email-input-error" className="identification__error-massage">Что-то пошло не так...</p>
                <p className="identification__input-title">Пароль</p>
                <input id="password-input" placeholder="Пароль" onChange={(e)=> handleChangePasswordInput(e)} className="identification__input" type="password" minLength="8" maxLength="20" required />
                <p id="password-input-error" className="identification__error-massage">Что-то пошло не так...</p>
            </form>
            <figure className="identification__sign-in">
                <p className={`identification__error-massage ${props.isError ? "identification__error-massage_type_error": ""}`}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
                <button form="identification__sign-up-form" className={`identification__submit-button ${isInputsValid ? "" : "identification__submit-button_type_disable"}`}>Зарегестрироваться</button>
                <p className="identification__paragraph">Уже зарегистрированы?</p>
                <Link className="identification__sign-in-button" to="/signin">Войти</Link>
            </figure>
        </section>
    )
}

export default SignUp;