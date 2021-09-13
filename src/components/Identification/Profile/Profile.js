/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"

function Profile(props) {
    const [userName, setUserName] = React.useState('')
    const [userEmail, setUserEmail] = React.useState('')
    const [inputsValid, setInputsValid] = React.useState(false)
    const form = React.createRef()

    useEffect(() => {
        const nameInput = form.current.querySelector('#profile-form__name-input')
        const emailInput = form.current.querySelector('#profile-form__email-input')
        nameInput.value = props.user.name
        emailInput.value = props.user.email
    }, [props.user])

    useEffect(()=>{
        const inputs = Array.from(form.current.querySelectorAll('.profile__data-value'))
        if (inputs.every(input => checkInputValidity(input))) {
            setInputsValid(true)
        } else {
            setInputsValid(false)
        }
    }, [userName, userEmail])

    const logout = () => {
        props.onLogout()
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const inputs = Array.from(e.target.querySelectorAll('.profile__data-value'))
        if (inputs.every(input => checkInputValidity(input))) {
            props.onEditProfile({ email: userEmail, name: userName })
        }
    }

    const handleNameInputChange = (e) => {
        setUserName(e.target.value)
        checkInputValidity(e.target)
    }

    const handleEmailInputChange = (e) => {
        setUserEmail(e.target.value)
        checkInputValidity(e.target)
    }

    const checkInputValidity = (input) => {
        const matched = input.getAttribute('id')==='profile-form__name-input' ? props.user.name === input.value : props.user.email === input.value;
        if (!input.validity.valid || matched) {
            input.setAttribute('class', 'profile__data-value profile__data-value_type_error')
            return false
        }
        else {
            input.setAttribute('class', 'profile__data-value')
            return true
        }
    }

    return (
        <section className="profile">
            <h2 className="profile__title">Привет, {props.user.name}!</h2>
            <form ref={form} className="profile__form" id="profile-form" onSubmit={(e) => onSubmit(e)}>
                <figure className="profile__data">
                    <p className="profile__data-option">Имя</p>
                    <input id="profile-form__name-input" onChange={(e) => handleNameInputChange(e)} minLength="3" maxLength="20" pattern="[A-Za-zА-Яа-я -]+$" type="text" className="profile__data-value" />
                </figure>
                <figure className="profile__data">
                    <p className="profile__data-option">E-mail</p>
                    <input onChange={(e) => handleEmailInputChange(e)} id="profile-form__email-input" type="email" className="profile__data-value" />
                </figure>
            </form>
            <figure className="profile__settings">
                <button form="profile-form" type="submit" className={inputsValid ? "profile__edit-button" : "profile__edit-button profile__edit-button_type_disable"}>Редактировать</button>
                <button onClick={() => logout()} className="profile__sign-out-button">Выйти из аккаунта</button>
            </figure>
        </section>
    );
}

export default Profile;