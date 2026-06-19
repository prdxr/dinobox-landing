import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="title is-2 has-text-centered">Что такое ДиноБокс?</h2>
      
        <div className="columns is-vcentered">
          <div className="column">
            <h3 className="subtitle is-4">Это умная система для ваших питомцев</h3>
            <p className="py-2">
              Она представляет собой модульное устройство для автоматизации мониторинга террариумов.
            </p>
            <p className="py-2">
              ДиноБокс измеряет выбранные параметры, например температуру или влажность воздуха, и сохраняет на сервере историю изменения климата.
            </p>
            <Link to="/about" className="about-link">Подробнее →</Link>
          </div>
        
          <div className="column">
            <figure className="image">
              <img src="/assets/about-photo.png" alt="Устройство ДиноБокс" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}