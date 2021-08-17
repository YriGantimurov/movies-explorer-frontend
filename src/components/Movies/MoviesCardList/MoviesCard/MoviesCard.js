import React from "react";
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
    const [isPushed, setIsPushed] = React.useState('movies-card__heart-button_type_unpushed');
    const location = useLocation();

    const handleDurationCalc = () => {
	    return Math.trunc(props.card.duration/60) + 'ч ' + props.card.duration % 60 + 'м';
    }

    const toggleHeartClass = () => {
        isPushed === 'movies-card__heart-button_type_pushed' 
        ? setIsPushed('movies-card__heart-button_type_unpushed')
        : setIsPushed('movies-card__heart-button_type_pushed')
    }
    
    return (
        <li className="movies-card" key={props.i}>
            <img alt="Обложка фильма" src={props.card.image} className="movies-card__image"/>
            <p className="movies-card__title">{props.card.title}</p>
            {location.pathname === '/saved-movies'
            ? <button className="movies-card__delete-button" ></button>
            : <button onClick={() => toggleHeartClass()} className={`movies-card__heart-button ${isPushed}`} ></button>
        }
            <button onClick={() => toggleHeartClass()} className={`movies-card__heart-button ${location.pathname === '/saved-movies'? 'movies-card__heart-button_type_none': isPushed}`} ></button>
            <p className="movies-card__duration">{handleDurationCalc()}</p>
        </li>
    )
}

export default MoviesCard;