import { useState } from 'react';

const products = [
  {
    id: 1,
    title: 'ДиноБокс Хаб',
    description: 'Основное устройство. Читает данные с подключенных сенсор-модулей и управляет подключенными менеджмент-модулями.',
    image: '/assets/product-hub.png'
  },
  {
    id: 2,
    title: 'Модуль влажности почвы',
    description: 'Измеряет влажность почвы с высокой точностью. Передаёт данные на хаб каждые 10 секунд.',
    image: '/assets/product-sensor-moisture.png'
  },
  {
    id: 3,
    title: 'Модуль управления распылителем',
    description: 'Позволяет поддерживать уровень влажности в террариуме. Управляется из веб-панели, может работать по расписанию или в зависимости от текущей влажности (при наличии датчика влажности воздуха или почвы).',
    image: '/assets/product-spray.png'
  }
];

export default function Products() {
  const [current, setCurrent] = useState(0);

  return (
    <section id="products" className="section products-section">
      <div className="container">
        <h2 className="title is-2 has-text-centered">Наши продукты</h2>
        <div className="carousel-container">
          <div className="carousel-slide">
            <div className="product-card">
              <div className="columns is-vcentered">
                <div className="column is-5">
                  <figure className="image">
                    <img src={products[current].image} alt={products[current].title} />
                  </figure>
                </div>
                <div className="column">
                  <h3 className="subtitle is-4">{products[current].title}</h3>
                  <p className="product-description">{products[current].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dots-container">
          {products.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === current ? 'is-active' : ''}`}
              onClick={() => setCurrent(idx)}
              role="button"
              tabIndex="0"
              aria-label={`Переключить на продукт ${idx + 1}`}
            />
          ))}
        </div>
        <div className="catalog-link-wrapper">
          <a href="/products" className="catalog-link">В каталог →</a>
        </div>
      </div>
    </section>
  );
}