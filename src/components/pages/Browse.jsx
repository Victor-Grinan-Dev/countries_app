import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../UIs/Card';


const databaseAPI = 'http://localhost:3001/database';

const countriesApi = "https://restcountries.com/v3.1/all";



function Browse() {
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  // const countriesFilter = countries.filter((res) => {
  //   res.name = res.name.toLowerCase()
  //   return res.name.includes(search.toLowerCase());
  // });

  const searchHandler = (e) => {
    setSearch(e.target.value); 
    };

  const getcountries = () => axios.get(countriesApi);
  const getWeather = () => axios.get(countriesApi);

  const countriesFilter = countries.filter((res) => {
    res.name.common = res.name.common;
    return res.name.common.toLowerCase().includes(search);
  });


  useEffect(() => {
    setLoading(true);
    Promise.all([getcountries(), getWeather()]).then(function (results) {
      const countriesData = results[0]; 
      setCountries(countriesData.data);
      //console.log("promise.all, countriesData: ", countriesData.data)
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
              <Card 
              key={index}
              //key={country.ccn3}
              commonName={country.name.common} 
              officialName={country.name.official}
              population={country.population}
              flag={country.flags.png}
              capital={country.capital}
              currencies={country.currencies}
              languages={country.languages}

              // data={country}

              // country={country.find(
              //   (country) => country.name.common === country.name.common
              // )}

              // {...country}

              />

              ))} 
              
        </div>

    </div>
  );
};

export default Browse;
