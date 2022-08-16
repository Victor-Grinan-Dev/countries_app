import React from 'react';
//import cardCss from './components/styles/card.scss';
import { Link } from 'react-router-dom';
import officialNameIcon from '../assets/countries_icons/countries_official_name.png';
import populationIcon from '../assets/countries_icons/countries_population.png';
import capitalIcon from '../assets/countries_icons/countries_capital.png';
import langIcon from '../assets/countries_icons/countries_language.png'
import currencyIcon from '../assets/countries_icons/countries_currency.png'

const Card = ({ 
  commonName,
  officialName,
  population,
  flag,
  capital,
  currencies,
  languages,
  data,
  country
}) => {

  const capitalStart = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const cityImage = 'https://source.unsplash.com/500x400/?' + capital;

  return (
    
    <div className="cardBox" >

     
      <div className="inner" style={{
        backgroundImage:`url(${cityImage})`,
      }}>

        <h2 className="name" >{capitalStart(commonName)}</h2>

        <img src={flag} alt={commonName} className="flag" 
            style={{
              width:"50px",
            }}/> 
       
        </div>
        
        <div className="moreData">
          <div className='smallData'>
            <p><img src={officialNameIcon} alt="officialName" className="tinyIcon" /></p>
            <p>{officialName}</p>
          </div>
          
          <div className='smallData'>
          <p><img src={populationIcon} alt="officialName" className="tinyIcon" /></p>
            <p>{(population/1000000).toPrecision(2)}</p>
            
          </div>
          
          <div className='smallData'>
          <p><img src={capitalIcon} alt="officialName" className="tinyIcon" /></p>
            <p>{capital}</p>
          </div>

          <div className='smallData'>
          <p><img src={langIcon} alt="officialName" className="tinyIcon" /></p>
          
          {
            Object.values(languages || {}).map((value, i)=>(
              <p key={i}> {(i ? '' : '') + value} </p>
            ))
          }
        </div>

        <div className='smallData'>
        <p><img src={currencyIcon} alt="officialName" className="tinyIcon" /></p>
          {
            Object.values(currencies || {}).map((value, i)=>(
              <p key={i}> {(i ? '' : '') + value.name} </p>
            ))
          }
        </div>

        </div>
        <Link to={commonName} className="info"> See more </Link>
    </div>
    
  );
};

export default Card;

/*
state={{ data: data, country: country }} 
*/

{/* <div class="inner">
  <h2 class="title">Mit 117 Sachen durch Klugheimschen Basaltgebirge</h2>
  <time class="subtitle">03. März 2021<time>
</div> */}
