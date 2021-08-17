function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <figure className="portfolio__link" onClick={() => window.open("https://yrigantimurov.github.io/how-to-learn")}>
                <p className="portfolio__link-name">Статичный сайт</p>
                <button className="portfolio__link-button"></button>
            </figure>
            <figure className="portfolio__link" onClick={() => window.open("https://yrigantimurov.github.io/russian-travel")} >
                <p className="portfolio__link-name">Адаптивный сайт</p>
                <button className="portfolio__link-button"></button>
            </figure>
            <figure className="portfolio__link" onClick={() => window.open("http://server.yuri.nomoredomains.monster")}>
                <p className="portfolio__link-name">Одностраничное приложение</p>
                <button className="portfolio__link-button"></button>
            </figure>
        </section>
    );
  }
  
export default Portfolio;