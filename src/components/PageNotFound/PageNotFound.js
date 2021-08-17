import { useHistory } from 'react-router-dom'

function PageNotFound() {
    const history = useHistory();

    return (
        <section className="page-not-found">
            <figure className="page-not-found__container">
            <h2 className="page-not-found__title">404</h2>
            <p className="page-not-found__paragraph">Страница не найдена</p>
            </figure>
            <p className="page-not-found__go-back-button" onClick={()=>history.goBack()}>Назад</p>
        </section>
    );
  }
  
export default PageNotFound;
  