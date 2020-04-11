import React from 'react';
// import { useStats } from '../../../utils/hooks';
import { useStatsMachineFetch } from '../../../utils/hooks';

const CardCountry = ({ url }) => {
  const { current } = useStatsMachineFetch(url);
  const { data, error } = current.context;
  const date = new Date(data.lastUpdate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const lastUpdate = `${day}/${month}/${year}`;

  if (current.matches('loading'))
    return <div className="loader">Cargando...</div>;
  if (current.matches('failure'))
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
          {data.confirmed.value}
        </p>
        <p>
          <label>Recuperadaos</label>
          {data.recovered.value}
        </p>
        <p>
          <label>Muertes</label>
          {data.deaths.value}
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
