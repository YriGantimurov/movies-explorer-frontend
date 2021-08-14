function NavTab(props) {
    return (
        <nav className="promo__nav-tab">
            <button className="promo__nav-button" onClick={(e)=> {e.view.document.querySelector('.about-project').scrollIntoView({block: "start", behavior: "smooth"})}}>О проекте</button>
            <button className="promo__nav-button" onClick={(e)=> {e.view.document.querySelector('.techs').scrollIntoView({block: "start", behavior: "smooth"})}}>Технологии</button>
            <button className="promo__nav-button" onClick={(e)=> {e.view.document.querySelector('.about-me').scrollIntoView({block: "start", behavior: "smooth"})}}>Студент</button>
        </nav>
    );
  }
  
export default NavTab;
  