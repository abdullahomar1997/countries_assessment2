import React, { useState, createContext,useEffect } from 'react'
import { countriesTransform } from './countries.service';

export const CountriesContext = createContext();

export const CountriesContextProvider = ({ children }) => {

    const [countries, setCountries] = useState([]);
    const [keyword, setKeyword] = useState("")

    const onSearch = (searchKeyword) => {
      console.log("abc",searchKeyword)
      setKeyword(searchKeyword)
    }

    useEffect(() => {
      
    }, [countries]);

    useEffect(() => {
        const retrieveCountries = async () => {
          try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const jsonData = await response.json();
            const filteredData = jsonData.filter((item) => item.name.common.toLowerCase().includes(keyword.toLowerCase()));
            const sortedData = filteredData.sort((a, b) => a.name.common.localeCompare(b.name.common));
            setCountries(countriesTransform(sortedData));
          } catch (error) {
          }
        };
        retrieveCountries();
      }, [keyword]);

    return (
        <CountriesContext.Provider
            value={{
                countries,
                search:onSearch
            }}>
            {children}
        </CountriesContext.Provider>
    )
}