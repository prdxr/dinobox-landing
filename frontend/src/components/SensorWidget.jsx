import { useState, useEffect } from 'react';
import { getSensors } from '../services/api';

export default function SensorWidget() {
  const [data, setData] = useState({ temperature: 0, humidity: 0, light_level: 0 });

  const fetchData = async () => {
    try {
      const res = await getSensors();
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section has-background-beige">
      <div className="container">
        <h2 className="title is-2">Текущие показатели</h2>
        <div className="columns">
          <div className="column has-text-centered">
            <p className="heading">Температура</p>
            <p className="title is-3">{data.temperature} °C</p>
          </div>
          <div className="column has-text-centered">
            <p className="heading">Влажность</p>
            <p className="title is-3">{data.humidity} %</p>
          </div>
          <div className="column has-text-centered">
            <p className="heading">Освещённость</p>
            <p className="title is-3">{data.light_level} лм</p>
          </div>
        </div>
      </div>
    </section>
  );
}