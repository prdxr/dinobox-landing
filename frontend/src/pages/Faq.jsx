import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    question: 'Каким животным подойдёт ДиноБокс?',
    answer: 'Текущая модель хаба ДиноБокс предназначена для террариумных животных: змей, ящериц, черепах, амфибий и членистоногих.'
  },
  {
    question: 'Какие бывают комплектации системы?',
    answer: 'Доступны различные наборы модулей: базовый (температура+влажность), расширенный (+освещение), профессиональный (+CO2, давление). Также можно собрать индивидуальный набор.'
  },
  {
    question: 'Для какого количества животных подойдёт ДиноБокс?',
    answer: 'Один хаб предполагается использовать на один террариум, но при малом количестве отслеживаемых параметров можно использовать разные слоты одного хаба под разные террариумы.'
  },
  {
    question: 'Нужно ли программировать систему?',
    answer: 'Нет, настройка производится через веб-интерфейс без написания кода. Вы просто задаёте желаемые параметры среды: температуру, влажность, свет...'
  },
  {
    question: 'Есть ли мобильное приложение?',
    answer: 'Веб-панель адаптирована для мобильных устройств, поэтому отдельное приложение не требуется. Достаточно открыть браузер на смартфоне.'
  },
  {
    question: 'Как часто нужно обслуживать систему?',
    answer: 'Рекомендуется раз в месяц проверять работу датчиков и чистить их от пыли. Модули не требуют специального обслуживания.'
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section faq-section">
      <div className="container">
        <h1 className="title is-1 has-text-centered">Часто задаваемые вопросы</h1>
        <p className="subtitle has-text-centered mb-6">
          Ответы на самые популярные вопросы о системе ДиноБокс
        </p>

        <div className="faq-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqData.map((item, idx) => (
            <div key={idx} className="faq-item" onClick={() => toggle(idx)}>
              <div className="faq-header">
                <span className="faq-triangle" style={{ transform: openIndex === idx ? 'rotate(90deg)' : 'none' }}>▶</span>
                <span className="faq-question">{item.question}</span>
              </div>
              <div className="faq-answer" style={{ maxHeight: openIndex === idx ? '300px' : '0' }}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="has-text-centered mt-6">
          <p className="mb-4">Не нашли ответа на свой вопрос?</p>
          <Link to="/contact" className="button is-primary">Свяжитесь с нами</Link>
          <br />
          <Link to="/" className="button is-ghost mt-4">Вернуться на главную</Link>
        </div>
      </div>
    </section>
  );
}