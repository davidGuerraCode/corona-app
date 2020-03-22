import React from 'react';
import { useStats } from '../../../utils/hooks';

const CardCountry = ({ url }) => {
  const { stats, loading, error } = useStats(url);

  if (loading) return <div className="loader">Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="cards-country">
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
  );
};

export default CardCountry;
