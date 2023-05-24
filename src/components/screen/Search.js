import React, { useContext, useState } from 'react';
import { CountriesContext } from '../services/countries.context';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { search } = useContext(CountriesContext);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    search(searchQuery);
  };

  return (
    <div style={{ width: '50%',paddingLeft:"10px",display:"flex" }}>
      <form onSubmit={handleSearchSubmit} style={form} >
        <input
          type="text"
          placeholder="Enter Country Name"
          value={searchQuery}
          onChange={handleSearchChange}
          style={input}
        />
        <button type="submit" style={button}>Search</button>
      </form>
    </div>
  );
};

export default Search;

const form = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
}
const input = {
    padding: '10px',
    marginRight: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    flex: '1',
    maxWidth: '300px',
}
const button = {
    padding: '10px 20px',
    borderRadius: '4px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
}