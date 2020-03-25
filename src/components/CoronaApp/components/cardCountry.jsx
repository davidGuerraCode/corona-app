import React from 'react';
import { useStats } from '../../../utils/hooks';

const CardCountry = ({ url }) => {
  const { stats, loading } = useStats(url);
  const date = new Date(stats.lastUpdate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const lastUpdate = `${day}/${month}/${year}`;

  if (loading) return <div className="loader">Cargando...</div>;
  if (stats.error)
    return (
      <p className="error-message">
        Oops, parace que la información para este país no está actualmente
        disponible, <a href="/"> volver.</a>
      </p>
    );

  return (
    <div className="cards-country">
      <div className="display-data">
        <p>
          <label>Confirmados</label>
          {stats.confirmed.value}
        </p>
        <p>
          <label>Recuperadaos</label>
          {stats.recovered.value}
        </p>
        <p>
          <label>Muertes</label>
          {stats.deaths.value}
        </p>
      </div>
      <div className="last-update">
        <p>
          <label>Última actualización</label>
          {lastUpdate}
        </p>
      </div>
    </div>
  );
};

export default CardCountry;
