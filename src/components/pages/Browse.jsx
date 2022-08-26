import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import BSCard from '../UIs/BSCard';

const countriesApi = "https://restcountries.com/v3.1/all";

function Browse() {
  const [countries, setCountries] = useState([]);
  const [countriesWeather, setCountriesWeather] = useState({});

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const searchHandler = (e) => {
    setSearch(e.target.value); 
    };

  const getcountries = () => axios.get(countriesApi);
  

  const countriesFilter = countries.filter((res) => {
    res.name.common = res.name.common;
    return res.name.common.toLowerCase().includes(search);
  });


  useEffect(() => {
    setLoading(true);
      Promise.all([getcountries()]).then(function (results) {
      const countriesData = results[0]; 
      setCountries(countriesData.data);
      countries.map(country => {
        console.log(country.capital)
      })
    
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="browse">
      
      <div className="search" >
        <input type="text" className="searchImput" placeholder="🔍" onChange={searchHandler} />
      </div>

      <div className="showCards" 
      style={{
        display:"flex",
        flexWrap:"wrap",
        flexDirection:"row"
      }}
      >

          {countriesFilter.map((country, index) => (
                //  console.log(country)
              <BSCard 
              key={index}
              //key={country.ccn3}
              commonName={country.name.common} 
              officialName={country.name.official}
              population={country.population}
              flag={country.flags.png}
              capital={country.capital}
              currencies={country.currencies}
              languages={country.languages}
              url={`${country.name.common}`}
              data={country}
              />

              ))} 
              
        </div>

    </div>
  );
};

export default Browse;
