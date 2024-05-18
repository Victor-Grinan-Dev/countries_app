import React, { useEffect } from 'react';

import officialNameIcon from '../../assets/countries_icons/countries_official_name.png';
import populationIcon from '../../assets/countries_icons/countries_population.png';
import capitalIcon from '../../assets/countries_icons/countries_capital.png';
import langIcon from '../../assets/countries_icons/countries_language.png';
import currencyIcon from '../../assets/countries_icons/countries_currency.png';

import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, deleteFromFavorite, favoriteCountriesSelector } from '../../features/countries/countriesSlice';

import { populationReader } from '../../functions/populationReader';

const Card = ({
    commonName,
    officialName,
    population,
    flag,
    capital,
    currencies,
    languages,
    url,
    data
}) => {

    const favoriteList = useSelector(favoriteCountriesSelector);
    const dispatch = useDispatch();
    const cityImage = 'https://source.unsplash.com/500x400/?'  +  commonName; 

    useEffect(()=>{
        localStorage.setItem('favoriteCountries', favoriteList);
      }, [favoriteList])

      const favoriteHandler = (e) => {
        if(e.target.checked){
          dispatch(addToFavorite(data?.name.common));
        //   addToFav(data?.name.common);
        } 
        else {
          dispatch(deleteFromFavorite(data?.name.common));
        //   removeFromFav(data?.name.common);
        }  
      }

      const checkIsFavorite = (commonName) => {
        //conditional render checkbox
        for(let item of favoriteList){
          if( item === commonName){
            return true;
          }
        }
        return false;
      };

  return (
    <div className='card'>
        <div className="card-image">
            <img src={cityImage} alt="country" />
        </div>
        <div className="card-body">

            <div className="card-body-upper">
                <div className="card-title">{commonName}</div>
                <img src={flag} alt="flag" className="flag"/>

                <div>
                    <label htmlFor="isFavorite">Favorite</label>
                    <input type="checkbox" name="isFavorite" onClick={favoriteHandler} defaultChecked={checkIsFavorite(commonName) ? true : false} value={checkIsFavorite()}/>
                </div>
            </div>

            <div className="card-body-lower">
                <div className='smallData'>
                    <p><img src={officialNameIcon} alt="officialName" className="tinyIcon" /></p>
                    <p>{officialName}</p>
                </div>
            
                <div className='smallData'>
                    <p><img src={populationIcon} alt="officialName" className="tinyIcon" /></p>
                    <p>{populationReader(population)}</p>
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
            <div className="card-body-lower">
                <button>more info</button>
            </div>
        </div>
    </div>
  )
}

export default Card;