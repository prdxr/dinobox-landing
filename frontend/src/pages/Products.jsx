import { Link } from 'react-router-dom';

export default function Products() {
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

  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-1 has-text-centered">Наши продукты</h1>
        <p className="subtitle has-text-centered mb-6">
          Полный ассортимент для создания умного террариума
        </p>

        <div className="columns is-multiline">
          {products.map((product) => (
            <div key={product.id} className="column is-4">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={product.image} alt={product.title} />
                  </figure>
                </div>
                <div className="card-content">
                  <h3 className="title is-4">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                </div>
                <footer className="card-footer">
                  <a href="#" className="card-footer-item">Подробнее</a>
                  <a href="#" className="card-footer-item">Купить</a>
                </footer>
              </div>
            </div>
          ))}
        </div>

        <div className="has-text-centered mt-6">
          <Link to="/" className="button is-primary">Вернуться на главную</Link>
        </div>
      </div>
    </section>
  );
}