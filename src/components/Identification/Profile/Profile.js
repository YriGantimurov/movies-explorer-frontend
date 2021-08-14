import { Link } from 'react-router-dom'

function Profile(props) {
    return (
        <section className="profile">
            <h2 className="profile__title">Привет, {props.profile.name}!</h2>
            <figure className="profile__data">
                <p className="profile__data-option">Имя</p>
                <p className="profile__data-value">{props.profile.name}</p>
            </figure>
            <figure className="profile__data">
                <p className="profile__data-option">E-mail</p>
                <p className="profile__data-value">{props.profile.email}</p>
            </figure>
            <figure className="profile__settings">
                <button className="profile__edit-button">Редактировать</button>
                <Link to="/signin" className="profile__sign-out-button">Выйти из аккаунта</Link>
            </figure>
        </section>
    );
}

export default Profile;