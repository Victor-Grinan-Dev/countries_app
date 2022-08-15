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
    <div className="cardBox" style={{
      width:"300px",
      height:"600",
      backgroundColor:"white",
      backgroundSize:"100%",
      display:"flex",
      justifyContent:"center",
      alignItems: "center",
      margin:"10px",
      borderRadius:"10px",
    }}>
      
      <div className="inner" style={{
        backgroundImage:`url(${cityImage})`,
        backgroundColor:"black",
        width:"160px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:"10px",
        color:"#fff",
        filter: "grayscale(50%)",

      }}>

        <h2 className="name" >{capitalStart(commonName)}:</h2>

        <img src={flag} alt={commonName} className="image" 
            style={{
              width:"50px",
            }}/> 
       
        <div className="moreData">
          <p>officialName: {officialName}</p>
          <p>population: {population}</p>
          <p>capital: {capital}</p>
          {
            Object.values(languages || {}).map((value, i)=>(
              <span key={i}> {(i ? ', ' : '') + value} </span>
            ))
          }

{
            Object.values(currencies || {}).map((value, i)=>(
              <span key={i}> {(i ? ', ' : '') + value} </span>
            ))
          }
        </div>

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
