import { useState } from 'react';
import { getCalculator } from '../services/api';

export default function Calculator() {
  const [params, setParams] = useState({ length: 60, width: 40, height: 40, pet_type: 'хамелеон' });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await getCalculator(params);
      setResult(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-2">Калькулятор оборудования</h2>
        <form onSubmit={handleSubmit}>
          <div className="columns">
            <div className="column">
              <input className="input" type="number" name="length" value={params.length} onChange={handleChange} placeholder="Длина (см)" />
            </div>
            <div className="column">
              <input className="input" type="number" name="width" value={params.width} onChange={handleChange} placeholder="Ширина (см)" />
            </div>
            <div className="column">
              <input className="input" type="number" name="height" value={params.height} onChange={handleChange} placeholder="Высота (см)" />
            </div>
            <div className="column">
              <select className="input" name="pet_type" value={params.pet_type} onChange={handleChange}>
                <option value="хамелеон">Хамелеон</option>
                <option value="змея">Змея</option>
                <option value="черепаха">Черепаха</option>
              </select>
            </div>
          </div>
          <button className="button is-primary" type="submit" disabled={loading}>
            {loading ? 'Расчёт...' : 'Рассчитать'}
          </button>
        </form>
        {result && (
          <div className="box mt-4">
            <p><strong>Обогреватель:</strong> {result.heater_power_watt} Вт</p>
            <p><strong>Лампа:</strong> {result.lamp_type}</p>
            <p><strong>Влажность:</strong> {result.humidity_target}</p>
          </div>
        )}
      </div>
    </section>
  );
}