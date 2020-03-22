import React from 'react';

const SelectCountries = ({ countries, currentCountry, onSelect }) => {
  return (
    <select onChange={event => onSelect(event.target.value)}>
      {Object.entries(countries.countries).map(([country, code]) => (
        <option
          key={country}
          value={countries.iso3[code]}
          selected={countries.iso3[code] === currentCountry}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default SelectCountries;
