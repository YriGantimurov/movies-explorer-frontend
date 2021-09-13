import React, { useEffect } from "react"

function SearchForm(props) {
    const [searchValue, setSerchValue] = React.useState('');
    const [isThumblerOn, setIsThumblerOn] = React.useState(true);
    const [isErrorOn, setIsErrorOn] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');

    useEffect(()=> {
        if(props.cardsLength === 0) {
            setErrorMessage('Ничего не найдено')
            setIsErrorOn(true)
        } else {
            setIsErrorOn(false)
        }
    }, [props.cardsLength])

    useEffect(()=>{
        if(props.serverError) {
            setErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
            setIsErrorOn(true)
        }
    }, [props.serverError])

    const handleSubmit = (e) => {
        if(e) e.preventDefault();
        if(searchValue === '') {setErrorMessage('Нужно ввести ключевое слово'); setIsErrorOn(true); return};
        props.onSearch(searchValue, isThumblerOn)
    }

    const handleThumblerToggle = () => {
        setIsThumblerOn(!isThumblerOn)

        if(searchValue === '') {setErrorMessage('Нужно ввести ключевое слово'); setIsErrorOn(true); return};
        props.onSearch(searchValue, !isThumblerOn)
    }

    const handleChangeValue = (e) => {
        setIsErrorOn(false)
        setSerchValue(e.target.value)
    }

    return (
        <form noValidate className="search-form" onSubmit={handleSubmit} id="search-form">
            <figure className="search-form__search-bar">
            <input onChange={(e)=>handleChangeValue(e)} form="search-form" type="text" className="search-form__search-input" required id="search-input" name="search-input" placeholder="Фильм" />
                <button form="search-form" type="submit" className="search-form__submit-button"></button>
            </figure>
            <p className={isErrorOn ? "search-form__error-message search-form__error-message_type_error" : "search-form__error-message"}>{errorMessage}</p>
            <figure className="search-form__thumbler">
                <div onClick={()=>handleThumblerToggle()} className={`search-form__checkbox ${isThumblerOn? 'search-form__checkbox_position_on': ''}`}></div>
                <div onClick={()=>handleThumblerToggle()} className={`search-form__checkbox-container ${isThumblerOn? 'search-form__checkbox-container_position_on': ''}`}></div>
                <p onClick={()=>handleThumblerToggle()} className="search-form__paragraph" htmlFor="search-form__checkbox">Короткометражки</p> 
            </figure> 
        </form>
    )
}

export default SearchForm