function AboutProject() {
    return (
        <section className="about-project">
            <h2 className="section__title">О проекте</h2>
            <div className="about-project__articles-container">
                <figure  className="about-project__article">
                    <h3 className="about-project__article-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__article-paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </figure>
                <figure  className="about-project__article">
                    <h3 className="about-project__article-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__article-paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </figure>
            </div>
            <div className="about-project__illustration-container">
                <p className="about-project__illustration-paragraph about-project__illustration-paragraph_color_black">1 Неделя</p>
                <p className="about-project__illustration-paragraph about-project__illustration-paragraph_color_white">4 Недели</p>
                <p className="about-project__illustration-description">Back-end</p>
                <p className="about-project__illustration-description">Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject;