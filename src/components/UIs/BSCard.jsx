import React from 'react';
import Card from 'react-bootstrap/Card';

import officialNameIcon from '../assets/countries_icons/countries_official_name.png';
import populationIcon from '../assets/countries_icons/countries_population.png';
import capitalIcon from '../assets/countries_icons/countries_capital.png';
import langIcon from '../assets/countries_icons/countries_language.png';
import currencyIcon from '../assets/countries_icons/countries_currency.png';

//import Image from "assets/hotw-logo.png"
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const openWeather = "https://api.openweathermap.org/data/2.5/weather";
const secretKey = "80e877059407012cbef59f8ac82bcf1c";
const getWeather = (city) => axios.get(`${openWeather}?q=${city}&appid=${secretKey}&units=metric`);

function BSCard({
    commonName,
    officialName,
    population,
    flag,
    capital,
    currencies,
    languages,
    url,
    data
}) 

{
  const capitalStart = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const cityImage = 'https://source.unsplash.com/500x400/?'  +  commonName; //+ capital;

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


  return (
    <div style={{
      margin:"20px 0"
    }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cityImage} style={{
          backgroundColor:"beige"
        }}/>
        <Card.Body>
            <Card.Title style={{
              display:"flex",
              justifyContent:"space-between"
            }}>
              {commonName} 
              <img src={flag} alt="flag" className="flag"/>
            </Card.Title>
  
            <div >

              <div className='smallData'>
                <p><img src={officialNameIcon} alt="officialName" className="tinyIcon" /></p>
                <p>{officialName}</p>
              </div>
          
              <div className='smallData'>
                <p><img src={populationIcon} alt="officialName" className="tinyIcon" /></p>
                <p>{(population/1000000).toPrecision(2)}M</p>
              </div>
          
              <div className='smallData'>
                <p><img src={capitalIcon} alt="officialName" className="tinyIcon" /></p>
                <p>{capital}</p>
              </div>

              <div className='smallData'>
                <p><img src={langIcon} alt="officialName" className="tinyIcon" /></p>
                <div className="repeatedSmallData">
                  {
                    Object.values(languages || {}).map((value, i)=>(
                      
                        <p key={i}> {(i ? '' : '') + value} </p>
                      
                    ))
                  }
                </div>
              </div>

              <div className='smallData'>
                <p><img src={currencyIcon} alt="officialName" className="tinyIcon" /></p>
                <div className="repeatedSmallData">
                  {
                    Object.values(currencies || {}).map((value, i)=>(
                      
                        <p key={i}> {(i ? '' : '') + value.name} </p>
                      
                    ))
                  }
                </div>
            </div>
          </div>

            <LinkContainer 
              to={url} state={{data:data}}>
              <Button 
                variant="primary" 
                >
                  More Info TEST
                  
                </Button>
            </LinkContainer>

        </Card.Body>
      </Card>
    </div>
  )
}

export default BSCard;