import React from 'react';
//import cardCss from './components/styles/card.scss';
import { Link } from 'react-router-dom';


const Card = ({ 
  commonName,
  officialName,
  population,
  flag,
  capital,
  currency,
  languages
}) => {

  const capitalStart = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className="cardBox" >
      
      <div className="cardHeader" >
        <h2 className="name" >{capitalStart(commonName)}:</h2>
       {/*  <img src={country.flag} alt={country.name} className="flag" /> */}
      </div>
      
      <div className="imageContainer" >  
          <img src={flag} alt={commonName} className="image" 
          style={{
            width:"50px",
          }}/> 
      <p>officialName: {officialName}</p>
      <p>population: {population}</p>
      <p>capital: {capital}</p>
      {/* <p>currency: {currency}</p>
      <p>languages: {languages}</p> */}
      </div>

    </div>
  );
};

export default Card;



{/* <div class="inner">
  <h2 class="title">Mit 117 Sachen durch Klugheimschen Basaltgebirge</h2>
  <time class="subtitle">03. März 2021<time>
</div> */}
