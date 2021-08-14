import React from "react"

function SearchForm() {
    const [isThumblerOn, setIsThumblerOn] = React.useState(true)

    const handleSubmit = (e) => {
        console.log('submited')
        e.preventDefault()
    }

    const handleThumblerToggle = ()=>{
        setIsThumblerOn(!isThumblerOn)
    }

    return (
        <form className="search-form" onSubmit={handleSubmit} id="search-form">
            <figure className="search-form__search-bar">
                <input form="search-form" type="text" className="search-form__search-input" required id="search-input" name="search-input" placeholder="Фильм" />
                <button form="search-form" type="submit" className="search-form__submit-button"></button>
            </figure>
            <figure className="search-form__thumbler">
                <div onClick={()=>handleThumblerToggle()} className={`search-form__checkbox ${isThumblerOn? 'search-form__checkbox_position_on': ''}`}></div>
                <div onClick={()=>handleThumblerToggle()} className={`search-form__checkbox-container ${isThumblerOn? 'search-form__checkbox-container_position_on': ''}`}></div>
                <p onClick={()=>handleThumblerToggle()} className="search-form__paragraph" htmlFor="search-form__checkbox">Короткометражки</p> 
            </figure> 
        </form>
    )
}

export default SearchForm