class MainApi {
    constructor(options) {
        this._key = options.headers.authorization;
        this._url = options.baseUrl
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    signUp(profile) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: {
                authorization: this._key,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: profile.name,
                email: profile.email,
                password: profile.password
            })
        })
       .then(this._checkResponse)
    }

    signIn(profile) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: {
                authorization: this._key,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: profile.email,
                password: profile.password
            })
        })
       .then(this._checkResponse)
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                authorization: this._key,
                'Content-Type': 'application/json'
            },
        })
       .then(this._checkResponse)
    }

    editUser(info) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                "Authorization": this._key,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: info.email,
                name: info.name,
            })
        })
        .then(this._checkResponse)
    }

    createCard(card) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: {
                "Authorization": this._key,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                country: card.country,
                director: card.director,
                duration: card.duration,
                year: card.year,
                description: card.description,
                image: `https://api.nomoreparties.co${card.image.url}`,
                trailer: card.trailerLink,
                thumbnail: 'http://gawain.ru/images/unesco/7_1_vrangel.jpg',
                movieId: card.id,
                nameRU: card.nameRU,
                nameEN: card.nameEN,
            })
        })
        .then(this._checkResponse)
    }

    deleteCard(cardId) {
        return fetch(`${this._url}/movies/${cardId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": this._key,
                'Content-Type': 'application/json'
            }
        })
        .then(this._checkResponse)
    }

    getSavedCards() {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            headers: {
                "Authorization": this._key,
                'Content-Type': 'application/json'
            }
        })
        .then(this._checkResponse)
    }
}

const api = new MainApi({ baseUrl: 'http://localhost:3000',
headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
}
})

export default api