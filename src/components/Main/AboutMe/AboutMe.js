import portrait from '../../../images/me.png'

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="section__title">Студент</h2>
            <div className="about-me__grid-container">
                <img className="about-me__portrait" src={portrait} alt="Портрет программиста" />
                <div className="about-me__container">
                    <p className="about-me__name">Юрий</p>
                    <p className="about-me__about-me">Фронтенд-разработчик, 17 лет</p>
                    <p className="about-me__biography">Я прямиком из холодных мест Сибири пиехал в Москву. Молодой, перспективный, непременно добьюсь успеха. Учусь хорошо, целюсь закончить МФТИ. Надеюсь, мне прочит карьера программиста, потому что нет ничего более меня увлекающего, а зарабатывать любимым делом - настоящая благодать. 	&hearts;</p>
                    <div className="about-me__social-network-container">
                    <a href="https://github.com/YriGantimurov" rel="noreferrer" target="_blank" className="about-me__social-network">Github</a>
                    <a href="https://soundcloud.com/mysounbi" rel="noreferrer" target="_blank" className="about-me__social-network">SoundCloud</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
