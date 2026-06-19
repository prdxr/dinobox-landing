export default function Benefits() {
  return (
    <section id="benefits" className="section has-background-beige">
      <div className="container">
        <h2 className="title is-2 has-text-centered">Наши преимущества</h2>
        <div className="columns">
          <div className="column align-center">
            <figure className="image p-5 pictogram-feature">
              <img src="/assets/features-combine.png" alt="Комбинируемость" />
            </figure>
            <h3 className="title is-5 has-text-centered">Комбинируемость</h3>
            <p className="heading">Можно использовать любые комбинации модулей.</p>
          </div>
          <div className="column align-center">
            <figure className="image p-5 pictogram-feature">
              <img src="/assets/features-unite.png" alt="Единый интерфейс" />
            </figure>
            <h3 className="title is-5 has-text-centered">Единый интерфейс</h3>
            <p className="heading">Управление устройствами ДиноБокс через веб-панель на десктопе или телефоне.</p>
          </div>
          <div className="column align-center">
            <figure className="image p-5 pictogram-feature">
              <img src="/assets/features-scale.png" alt="Масштабируемость" />
            </figure>
            <h3 className="title is-5 has-text-centered">Масштабируемость</h3>
            <p className="heading">Сервер ДиноБокс поддерживает одновременную работу десятков умных террариумов.</p>
          </div>
        </div>
      </div>
    </section>
  );
}