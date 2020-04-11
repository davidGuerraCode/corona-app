import React from 'react';

const SelectCountries = ({ countries, currentCountry, onSelect }) => {
  return (
    <select
      onChange={(event) => onSelect(event.target.value)}
      defaultValue={currentCountry}>
      {countries.countries.map(({ name, iso3 }) => (
        <option key={name} value={iso3}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default SelectCountries;
