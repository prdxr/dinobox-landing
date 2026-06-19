import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-1 has-text-centered">Контакты</h1>
        <p className="subtitle has-text-centered mb-6">
          Мы всегда готовы ответить на ваши вопросы
        </p>

        <div className="columns is-vcentered">
          <div className="column is-half">
            <div className="box">
              <h3 className="title is-4">Напишите нам</h3>
              <form>
                <div className="field">
                  <label className="label">Ваше имя</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Имя" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input" type="email" placeholder="example@mail.ru" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Сообщение</label>
                  <div className="control">
                    <textarea className="textarea" placeholder="Ваше сообщение..."></textarea>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button className="button is-primary">Отправить</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="column is-half">
            <div className="content">
              <h3 className="title is-4">Наши реквизиты</h3>
              <p>
                <strong>Email:</strong><br />
                <a href="mailto:dinobox@example.ru" className="contact-email">dinobox@example.ru</a>
              </p>
              <p>
                <strong>Телефон:</strong><br />
                <a href="tel:+71234567890">+7 (123) 456-78-90</a>
              </p>
              <p>
                <strong>Адрес:</strong><br />
                г. Москва, ул. Примерная, д. 1, офис 123
              </p>
              <p>
                <strong>Время работы:</strong><br />
                Пн-Пт: 10:00 – 18:00
              </p>
              <p>
                <strong>Социальные сети:</strong><br />
                <a href="#" className="social-link">Telegram</a> | <a href="#" className="social-link">VK</a>
              </p>
            </div>
          </div>
        </div>

        <div className="has-text-centered mt-6">
          <Link to="/" className="button is-ghost">Вернуться на главную</Link>
        </div>
      </div>
    </section>
  );
}