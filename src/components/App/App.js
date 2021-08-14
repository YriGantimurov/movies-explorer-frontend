import Header from '../Multitasking/Header/Header';
import Footer from '../Multitasking/Footer/Footer';
import Movies from '../Movies/Movies';
import Main from '../Main/Main';
import Register from '../Identification/Register/Register'
import Login from '../Identification/Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound'
import Profile from '../Identification/Profile/Profile'
import Menu from '../Menu/Menu'

import { Route, Switch, Redirect } from 'react-router-dom';
import { cards, profile } from '../../constants'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/profile'>
          <Profile profile={profile}/>
        </Route>
        <Route path='/movies'>
          <Movies cards={cards} />
        </Route>
        <Route path="/saved-movies">
          <Movies cards={cards} />
        </Route>
        <Route path="/page-not-found">
          <PageNotFound />
        </Route>
        <Redirect from="*" to="/page-not-found" />
      </Switch>
      <Footer />
      <Menu />
    </>
  )
}

export default App;
