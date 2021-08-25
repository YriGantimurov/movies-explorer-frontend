import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
    const [isPushed, setIsPushed] = React.useState('movies-card__heart-button_type_unpushed');
    const location = useLocation();

    useEffect(()=>{
        if (location.pathname === '/movies') {
            const isIdMatched = props.savedCards.some((card)=>{
            return card.movieId === props.card.id.toString()
        })
        setIsPushed(isIdMatched ? 'movies-card__heart-button_type_pushed': 'movies-card__heart-button_type_unpushed')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[location.pathname])

    const handleDurationCalc = () => {
	    return Math.trunc(props.card.duration/60) + 'ч ' + props.card.duration % 60 + 'м';
    }

    const toggleHeart = () => {
        if(isPushed === 'movies-card__heart-button_type_pushed') {
            setIsPushed('movies-card__heart-button_type_unpushed')
            props.savedCards.forEach(card=> {
                if(card.movieId === props.card.id.toString()) props.handleDeleteCard(card._id)
            })
        } else {
            setIsPushed('movies-card__heart-button_type_pushed')
            props.handleMakeCard(props.card)
        }
    }
    
    return (
        <li className="movies-card" key={props.i} >
            <img onClick={()=> props.card.trailerLink ? window.open(props.card.trailerLink) :  window.open(props.card.trailer)} alt="Обложка фильма" src={props.card.image.url ? `https://api.nomoreparties.co${props.card.image.url}` : props.card.image} className="movies-card__image"/>
            <p className="movies-card__title">{props.card.nameRU}</p>
            {location.pathname === '/saved-movies'
            ? <button className="movies-card__delete-button" onClick={()=>props.handleDeleteCard(props.card._id)}></button>
            : <button onClick={() => toggleHeart()} className={`movies-card__heart-button ${isPushed}`} ></button>
        }
            <p className="movies-card__duration">{handleDurationCalc()}</p>
        </li>
    )
}

export default MoviesCard;