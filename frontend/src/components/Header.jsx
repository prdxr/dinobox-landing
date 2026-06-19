import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav className="navbar is-fixed-top" aria-label="Основная навигация">
        <div className="navbar-brand">
          <NavLink className="navbar-item py-0" to="/" end>
            <img src="/assets/dinobox-logo.png" alt="Логотип" />
          </NavLink>
          <NavLink className="navbar-item" to="/" end>
            <span className="title is-5">ДиноБокс</span>
          </NavLink>
          <div className="navbar-burger" role="button" aria-label="Меню" aria-expanded="false">
            <span className="navbar-burger-line" aria-hidden="true"></span>
            <span className="navbar-burger-line" aria-hidden="true"></span>
            <span className="navbar-burger-line" aria-hidden="true"></span>
            <span className="navbar-burger-line" aria-hidden="true"></span>
          </div>
        </div>
        <div className="navbar-menu navbar-start">
          <NavLink className="navbar-item" to="/about" activeClassName="active">О проекте</NavLink>
          <NavLink className="navbar-item" to="/products" activeClassName="active">Продукты</NavLink>
          <NavLink className="navbar-item" to="/faq" activeClassName="active">ЧаВо</NavLink>
          <NavLink className="navbar-item" to="/contact" activeClassName="active">Контакты</NavLink>
        </div>
      </nav>
    </header>
  );
}