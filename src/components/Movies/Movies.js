import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
// import Preloader from './Preloader/Preloader'

function Movies(props) {
    return (
        <>
        {/* <Preloader /> */}
        <SearchForm />
        <MoviesCardList cards={props.cards}/>
        </>
        );
  }
  
  export default Movies;