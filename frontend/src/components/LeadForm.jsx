import { useState } from 'react';
import { sendLead } from '../services/api';

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', contact: '', terrarium_size: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendLead(form);
      setStatus('success');
      setForm({ name: '', contact: '', terrarium_size: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-2">Оставьте заявку</h2>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Имя</label>
            <input className="input" type="text" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="field">
            <label className="label">Контакт (телефон/email)</label>
            <input className="input" type="text" name="contact" value={form.contact} onChange={handleChange} required />
          </div>
          <div className="field">
            <label className="label">Размер террариума (необязательно)</label>
            <input className="input" type="text" name="terrarium_size" value={form.terrarium_size} onChange={handleChange} />
          </div>
          <button className="button is-primary" type="submit">Отправить</button>
        </form>
        {status === 'success' && <p className="help is-success">Заявка отправлена!</p>}
        {status === 'error' && <p className="help is-danger">Ошибка отправки.</p>}
      </div>
    </section>
  );
}