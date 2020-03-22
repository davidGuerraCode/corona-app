import React from 'react';
import { useStats } from '../../../utils/hooks';

const CardCountry = ({ url }) => {
  const { stats, loading } = useStats(url);

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
