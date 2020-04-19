import React from 'react';
import { useStatsMachineFetch } from '../../../utils/hooks';

const CardCountry = ({ url }) => {
  const { current } = useStatsMachineFetch(url);
  const { data } = current.context;
  const date = new Date(data.lastUpdate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const lastUpdate = `${day}/${month}/${year}`;

  return (
    <>
      {current.matches('loading') && <div className="loader">Cargando...</div>}
      {current.matches('failure') && (
        <p className="error-message">
          Oops, parace que la información para este país no está actualmente
          disponible, <a href="/"> volver.</a>
        </p>
      )}
      {current.matches('success') && (
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
      )}
    </>
  );
};

export default CardCountry;
