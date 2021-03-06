import React, { useEffect } from "react";
import MoviesCard from "./MoviesCard/MoviesCard";
import { useLocation } from "react-router";

function MoviesCardList(props) {
    const [elementsCount, setElementsCounnt] = React.useState(0)

    const location = useLocation();

    useEffect(() => {
        if (_columnsCount() === 1) setElementsCounnt(5);
        if (_columnsCount() === 2) setElementsCounnt(8);
        if (_columnsCount() > 2) setElementsCounnt(12);
    }, [])

    const _columnsCount = () => {
        const columnsCount = Math.floor((window.innerWidth - 140)/400)
        return columnsCount === 0
        ? 1
        : columnsCount
    }

    const handleMoreButton = () => {
        setElementsCounnt(elementsCount + _columnsCount())
    }

    return (
        <>
            <ul className="movies-card-list">
                {
                    props.cards.map((card, i) => {
                        if (i >= elementsCount) return false;
                        return <MoviesCard savedCards={props.savedCards} handleDeleteCard={props.handleDeleteCard} handleMakeCard={props.handleMakeCard} card={card} key={i} />
                    })}
            </ul>
            {elementsCount < props.cardsLength
                ? <button onClick={() => handleMoreButton()} className={location.pathname === '/saved-movies' ? "more-button_type_none" : "more-button"}>Ещё</button>
                : <></>
            }
        </>
    )
}

export default MoviesCardList;