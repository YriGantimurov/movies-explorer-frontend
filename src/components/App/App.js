import React, { useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import ProtectedRoute from '../../utils/ProtectedRoute';
import { UserContext } from '../../utils/UserContext';

import Header from '../Multitasking/Header/Header';
import Footer from '../Multitasking/Footer/Footer';
import Movies from '../Movies/Movies';
import Main from '../Main/Main';
import Register from '../Identification/Register/Register'
import Login from '../Identification/Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound'
import Profile from '../Identification/Profile/Profile'
import Menu from '../Menu/Menu'

import MoviesApi from '../../utils/MoviesApi';
import MainApi from '../../utils/MainApi'

function App() {
  const history = useHistory();

  const [cards, setCards] = React.useState([])
  const [searchedCards, setSearchedCards] = React.useState([])
  const [savedCards, setSavedCards] = React.useState([])
  const [cardsLength, setCardsLength] = React.useState(1)
  const [serverError, setServerError] = React.useState(false)
  const [registerServerError, setRegisterServerError] = React.useState(false)
  const [loginError, setLoginError] = React.useState(false)
  const [loginServerError, setLoginServerError] = React.useState(false)
  const [loggedIn, setLoggedIn] = React.useState(true)
  const [userName, setUserName] = React.useState('')
  const [userEmail, setUserEmail] = React.useState('')
  const [userId, setUserId] = React.useState('')
  const [isCardsLoaded, setIsCardsLoaded] = React.useState(false)
  const [isSavedCardsLoaded, setIsSavedCardsLoaded] = React.useState(true)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLoggedIn(true)
      MainApi.getUserInfo()
        .then(user => {
          setUserName(user.data.name)
          setUserEmail(user.data.email)
          setUserId(user.data._id)
          return (user.data._id)
        })
        .then(userId => renderSavedCards(userId))
        
    }
    else {
      setLoggedIn(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setRegisterServerError(false)
    setLoginServerError(false)
    setLoginError(false)
    setIsCardsLoaded(false)
    MoviesApi.getInitialCards()
      .then(cards => { setCards(cards); setIsCardsLoaded(true) })
      .catch(setServerError)
  }, [])

  const renderSavedCards = (Id) => {
    MainApi.getSavedCards()
      .then(cards => {
        setSavedCards(cards.data.filter(
          card => {
            if (!card.owner) return false;
            if (Id) return card.owner._id === Id
            else return card.owner._id === userId
          }))
      })
  }

  const onRegister = (profile) => {
    MainApi.signUp(profile)
      .then((userData) => {
        setUserName(userData.data.name)
        setUserEmail(userData.data.email)
        onLogin(profile)
      })
      .catch((err) => {console.log(err); setRegisterServerError(true)})
  }

  const onLogin = (profile) => {
    MainApi.signIn(profile)
      .then((data) => {
        localStorage.setItem('token', data.token);
        setLoggedIn(true)
        history.push('/movies')
      })
      .catch((err) => {err === 'Ошибка 400' || 'Ошибка 401' ? setLoginError(true) : setLoginServerError(true); setLoginServerError(true)})
  }

  const onLogout = () => {
    localStorage.removeItem('token')
    console.log(localStorage.getItem('token'))
    history.push('/')
    setLoggedIn(false)
  }

  const onEditProfile = (info) => {
    MainApi.editUser(info)
      .then(() => alert('Редактировано'), () => alert('Что-то пошло не так'))
  }

  const onSearch = (searchValue, isCheckboxOn) => {
    setSearchedCards([])
    const renderedCards = cards.filter(card => {
      return (card.nameRU.indexOf(searchValue) !== -1) && (isCheckboxOn ? (card.duration <= 40 ? true: false) : true)
    })
    setSearchedCards(renderedCards)
    setCardsLength(renderedCards.length)
  }

  const savedCardsSearch = (searchValue, isCheckboxOn) => {
    setSavedCards([])
    setIsSavedCardsLoaded(false)
    MainApi.getSavedCards()
      .then(cards => {
        const renderedCards = cards.data.filter(card => {
          return (card.nameRU.indexOf(searchValue) !== -1) && (isCheckboxOn ? (card.duration <= 40 ? true: false) : true);
        })
        const searchedSavedCards = renderedCards.filter(
          card => {
            if (!card.owner) return false;
            else return card.owner._id === userId
          })
        setCardsLength(searchedSavedCards.length)
        setSavedCards(searchedSavedCards)
        setIsSavedCardsLoaded(true)
      })
    .catch(setServerError(true))
  }

  const handleMakeCard = (card) => {
    MainApi.createCard(card)
      .then(() => renderSavedCards())
  }

  const handleDeleteCard = (cardId) => {
    MainApi.deleteCard(cardId)
      .then(() => renderSavedCards())
  }

  return (
    <UserContext.Provider value={{ name: userName, email: userEmail }}>
      <Header loggedIn={loggedIn} />
      <Switch>
        <Route path='/signup'>
          <Register onRegister={onRegister} isError={registerServerError}/>
        </Route>
        <Route path='/signin'>
          <Login onLogin={onLogin} isError={loginServerError} loginError={loginError}/>
        </Route>
        <Route exact path='/'>
          <Main />
        </Route>
        <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          component={Profile}

          onLogout={onLogout}
          onEditProfile={onEditProfile}
        />
        <ProtectedRoute
          path='/movies'
          loggedIn={loggedIn}
          component={Movies}

          savedCards={savedCards}
          handleDeleteCard={handleDeleteCard}
          handleMakeCard={handleMakeCard}
          serverError={serverError}
          cardsLength={cardsLength}
          isPreloaderVisible={!isCardsLoaded}
          onSearch={onSearch}
          cards={searchedCards}
          loginError={loginServerError}
        />
        <ProtectedRoute
          path="/saved-movies"
          loggedIn={loggedIn}
          component={Movies}

          isPreloaderVisible={!isSavedCardsLoaded}
          onSearch={savedCardsSearch}
          cardsLength={cardsLength}
          handleDeleteCard={handleDeleteCard}
          cards={savedCards}
        />
        <Route path="/page-not-found">
          <PageNotFound />
        </Route>
        <Redirect from="*" to="/page-not-found" />
      </Switch>
      <Footer />
      <Menu />
    </UserContext.Provider>
  )
}

export default App;
