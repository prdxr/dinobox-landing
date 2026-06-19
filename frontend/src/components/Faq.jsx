// components/Faq.jsx
import React, { useState } from 'react';

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
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <h2 className="title is-2 has-text-centered">Частые вопросы</h2>
        <div className="faq-list">
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
        <div className="faq-more">
          <a href="/faq" className="faq-link">Другие вопросы →</a>
        </div>
      </div>
    </section>
  );
}