import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1" style={{ fontSize: '6rem', color: 'var(--bulma-green)' }}>404</h1>
          <h2 className="title is-3">Страница не найдена</h2>
          <p className="subtitle is-5" style={{ maxWidth: '500px', margin: '0 auto 2rem' }}>
            Кажется, вы перешли по несуществующей ссылке или ошиблись адресом.
          </p>
          <Link to="/" className="button is-primary is-large">Вернуться на главную</Link>
        </div>
      </div>
    </section>
  );
}