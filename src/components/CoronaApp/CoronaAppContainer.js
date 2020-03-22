import React, { useState } from 'react';
import { useStats } from '../../utils/hooks';
import { SelectCountries } from './components';
import { CardCountry } from './components';

const CoronaApp = () => {
  const [url] = useState('https://covid19.mathdro.id/api/countries');
  const [selectedCountry, setSelectedCountry] = useState('VEN');
  const { stats: countries, loading, error } = useStats(url);

  if (loading) return <div className="loader">Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <main className="main-container">
        <h1>Selecciona tu país</h1>
        <h4>Actualmente mostrando {selectedCountry}</h4>
        <section className="select-container">
          <SelectCountries
            countries={countries}
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
};

export default CoronaApp;
