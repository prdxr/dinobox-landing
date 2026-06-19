import { useState } from 'react';

const tabsData = [
  {
    id: '1',
    title: '1. Подготовьте устройство',
    desc: 'Подключите нужные вам модули к хабу.',
    image: '/assets/guide-assemble.png'
  },
  {
    id: '2',
    title: '2. Подключите хаб к WiFi',
    desc: 'Чтобы сервер мог обнаружить его в локальной сети.',
    image: '/assets/guide-connect.png'
  },
  {
    id: '3',
    title: '3. Скачайте ПО сервера',
    desc: 'В качестве хоста подойдёт Windows и Linux.',
    image: '/assets/guide-download.png'
  },
  {
    id: '4',
    title: '4. Найдите хаб в веб-панели',
    desc: 'Нажмите кнопку сканирования, чтобы хаб добавился сам.',
    image: '/assets/guide-discover.png'
  }
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('1');
  const activeData = tabsData.find(item => item.id === activeTab);

  return (
    <section id="tabs-section" className="section has-background-green">
      <div className="container">
        <h2 className="title is-2 has-text-centered">Как это работает</h2>
        <div className="columns is-vcentered is-desktop">
          <div className="column is-4 align-center">
            <figure className="image guide-image">
              <img src={activeData.image} alt={activeData.title} />
            </figure>
          </div>
          <div className="column is-8">
            <ul className="vertical-tabs">
              {tabsData.map((tab) => (
                <li
                  key={tab.id}
                  className={`tab-item ${activeTab === tab.id ? 'is-active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div className="tab-content">
                    <h3 className="tab-title">{tab.title}</h3>
                    <p className="tab-description">{tab.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}