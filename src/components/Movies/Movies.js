import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from './Preloader/Preloader'

function Movies(props) {
    return (
        <>
            <SearchForm serverError={props.serverError} cardsLength={props.cardsLength} onSearch={props.onSearch} />
            {
                props.isPreloaderVisible
                    ? <Preloader />
                    : <MoviesCardList savedCards={props.savedCards} handleDeleteCard={props.handleDeleteCard} handleMakeCard={props.handleMakeCard} cardsLength={props.cardsLength} cards={props.cards} />
            }
        </>
    );
}

export default Movies;