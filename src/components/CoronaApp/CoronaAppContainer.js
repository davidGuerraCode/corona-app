import React, { useState } from 'react';
// import { useStats } from '../../utils/hooks';
import { useStatsMachineFetch } from '../../utils/hooks';
import { SelectCountries } from './components';
import { CardCountry } from './components';

const CoronaApp = () => {
  const url = 'https://covid19.mathdro.id/api/countries';
  const [selectedCountry, setSelectedCountry] = useState('VEN');
  // const { stats, loading } = useStats(url);
  const { current } = useStatsMachineFetch(url);
  const { data, error } = current.context;
  console.log('Dataa', data);
  if (current.matches('loading'))
    return <div className="loader">Cargando...</div>;

  if (current.matches('failure')) {
    return (
      <p className="error-message">
        Oops, parace que ocurrió un error intentando cargar la información,{' '}
        <a href="/"> volver.</a>
      </p>
    );
  }

  return (
    <>
      <main className="main-container">
        <h1>Selecciona tu país</h1>
        <h4>Actualmente mostrando {selectedCountry}</h4>
        <section className="select-container">
          <SelectCountries
            countries={data}
            currentCountry={selectedCountry}
            onSelect={setSelectedCountry}
          />
        </section>
        <section className="country-card-container">
          <CardCountry url={`${url}/${selectedCountry}`} />
        </section>
      </main>
    </>
  );
  /* if (loading) return <div className="loader">Cargando...</div>;
  if (stats.error) {
    return (
      <p className="error-message">
        Oops, parace que la información para este país no está actualmente
        disponible, <a href="/"> volver.</a>
      </p>
    );
  }

   */
};

export default CoronaApp;
