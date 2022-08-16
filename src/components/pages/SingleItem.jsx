import React from 'react';
import {useLocation } from 'react-router-dom';

function SingleItem() {


  const location = useLocation();
  const data = location.state.data;
  const name = data.name.common;

  const countryImage = 'https://source.unsplash.com/500x400/?' + name;

  console.log(location.state.data)

  //console.log(data)

  return (
    <div 
    style={{
      color:"white"
    }}
    >
        <h2 >Name: {data.name.common} <img src={data.flags.png} alt={data.name.common} style={{ width:"30px" }} /></h2>
        <hr />
        <p>Official name: {data.name.official}</p>
        <p>Population: {data.population}</p>
        <p>Capital: {data.capital}</p>

        <img src={countryImage} alt="country" />
    </div>
  )
}

export default SingleItem