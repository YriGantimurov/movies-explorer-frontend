import MoviesCard from "./MoviesCard/MoviesCard";
import { useLocation } from 'react-router-dom';

function MoviesCardList(props) {
    const location = useLocation();
    
    return (
        <>
            <ul className="movies-card-list">
                {props.cards.map((card, i) => {
                    return <MoviesCard card={card} key={i} />
                })}
            </ul>
            <button className={location.pathname === '/saved-movies' ? "more-button_type_none" : "more-button"}>Ещё</button>
        </>
    )
}

export default MoviesCardList;