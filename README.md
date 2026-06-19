# ДиноБокс – умные системы для террариумов

Лэндинг ДиноБокс – это full‑stack проект, представляющий собой лендинг для модульной системы автоматизации террариумов.
Включает в себя React‑фронтенд, REST API на FastAPI и SQLite‑базу данных.

Проект разработан в рамках итоговой аттестации по курсу "Фронтенд и бэкенд разработка".

## ⬆️ Как запустить
1. Клонирование репозитория
```bash
git clone https://github.com/prdxr/dinobox-landing.git
cd dinobox-landing
```

2. Запуск бэкенда
```bash
cd backend
pip install -r requirements.txt
python run.py
```
Сервер API будет доступен по адресу: http://localhost:8000
Документация Swagger: http://localhost:8000/docs

3. Запуск фронтенда
```bash
cd frontend
npm install
npm run dev
```
Приложение откроется по адресу: http://localhost:5173

## 📁 Структура проекта

```text
dinobox-landing/
├── backend/                # Бэкенд на FastAPI
│   ├── app/
│   │   ├── main.py         # Точка входа
│   │   ├── database.py     # Настройка SQLite
│   │   ├── models.py       # SQLAlchemy модели
│   │   ├── schemas.py      # Pydantic схемы
│   │   └── routers/        # Эндпоинты API
│   ├── requirements.txt
│   └── run.py
├── frontend/               # Фронтенд на React + Vite
│   ├── public/
│   │   └── assets/         # Изображения
│   ├── src/
│   │   ├── components/     # React‑компоненты
│   │   ├── pages/          # Страницы (Home, About, Products, FAQ, Contact, NotFound)
│   │   ├── services/       # API-запросы
│   │   ├── styles/         # CSS (Bulma + кастомные стили)
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── .env
└── README.md               # (Этот файлик)
```