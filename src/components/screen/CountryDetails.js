import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CountriesContext } from '../services/countries.context';
import ExportButtons from '../export/ExportButtons';

const CountryDetails = () => {
    const { countries } = useContext(CountriesContext);
    
    const { id } = useParams();
    
    const country = countries.find(item => item.id === parseInt(id));
    
    if(!country){
      return;
    }

    const {
        name = 'Kuwait',
        capital = 'Kuwait City',
        region = 'Asia',
        subregion = 'Western Asia',
        population = '4270563',
        area = '17818',
        timezones = 'UTC+03:00',
        // nativename = 'Native Kuwait',
        flag = 'https://flagcdn.com/w320/kw.png',
    } = country;
    
    return (
        <div>
            <div style={right} >
                <img src={flag} alt="Country" style={imageStyle} />
                <ExportButtons data={country} fileName={`${name} country info` } />
            </div>
            <h1 style={headingStyle}>{name}</h1>
            <div style={content} >
                <p>Capital City: {capital}</p>
                <p>Region: {region}</p>
                <p>Sub Region: {subregion}</p>
                <p>Population: {population}</p>
                <p>Area: {area}</p>
                <p>Timezones: {timezones}</p>
                {/* <p>Native Name: {nativename}</p> */}
            </div>
        </div>
  );
};

export default CountryDetails;

const headingStyle = {
  fontSize: '40px',
  fontWeight: 'bold',
  padding: '20px',
};
const content = {
  paddingLeft: '20px',
};

const imageStyle = {
  width: '30vw',
  height: '15vw',
  borderRadius: '10px',
  marginBottom:"20px"
};
const right = {
  position: 'absolute',
  right: '50px',
  top: '50px',
  display:"flex",
  flexDirection:"column",
};
