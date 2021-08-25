class MoviesApi {
    constructor(options) {
        this._url = options.baseUrl
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getInitialCards() {
        return fetch(`${this._url}/beatfilm-movies`)
        .then(this._checkResponse) 
    }
}

const api = new MoviesApi({baseUrl: 'https://api.nomoreparties.co'})

export default api