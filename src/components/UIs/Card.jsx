import React from 'react';
//import cardCss from './components/styles/card.scss';
import { Link } from 'react-router-dom';

const Card = ({ 
  commonName,
  officialName,
  population,
  flag,
  capital,
  currencies,
  languages
}) => {

  const capitalStart = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const cityImage = 'https://source.unsplash.com/500x400/?' + capital;



  return (
    <div className="cardBox" >
      
      <div className="inner" style={{
        backgroundImage:`url(${cityImage})`,
      }}>

        <h2 className="name" >{capitalStart(commonName)}:</h2>

        <img src={flag} alt={commonName} className="image" 
            style={{
              width:"50px",
            }}/> 
       
        {/* <p>currency: {currency}</p>
        <p>languages: {languages}</p> */}
        </div>
        
        <div className="moreData">
          <div className='smallData'>
            <p>A:</p>
            <p>{officialName}</p>
          </div>
          
          <div className='smallData'>
            <p>B:</p>
            <p>{(population/1000000).toPrecision(2)}</p>
            
          </div>
          
          <div className='smallData'>
            <p>C: </p>
            <p>{capital}</p>
          </div>

          <div className='smallData'>
            <p>D: </p>
          
          {
            Object.values(languages || {}).map((value, i)=>(
              <p key={i}> {(i ? '' : '') + value} </p>
            ))
          }
        </div>

        <div className='smallData'>
          <p>E:</p>
          {
            Object.values(currencies || {}).map((value, i)=>(
              <p key={i}> {(i ? '' : '') + value.name} </p>
            ))
          }
        </div>

        </div>

    </div>
  );
};

export default Card;



{/* <div class="inner">
  <h2 class="title">Mit 117 Sachen durch Klugheimschen Basaltgebirge</h2>
  <time class="subtitle">03. März 2021<time>
</div> */}
