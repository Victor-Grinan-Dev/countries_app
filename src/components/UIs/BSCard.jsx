
import officialNameIcon from '../../assets/countries_icons/countries_official_name.png';
import populationIcon from '../../assets/countries_icons/countries_population.png';
import capitalIcon from '../../assets/countries_icons/countries_capital.png';
import langIcon from '../../assets/countries_icons/countries_language.png';
import currencyIcon from '../../assets/countries_icons/countries_currency.png';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, deleteFromFavorite, favoriteCountriesSelector } from '../../features/countries/countriesSlice';
import { populationReader } from '../../functions/populationReader';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Link } from 'react-router-dom';
import FavoriteHeart from './FavoriteHeart';
import Tooltip from './Tooltip';

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
}) {
  const favoriteList = useSelector(favoriteCountriesSelector);
  const dispatch = useDispatch();

  const [
    // favorites, 
    addToFav, 
    removeFromFav
  ] = useLocalStorage('favoriteCountries', []);

  const favoriteHandler = (e) => {
    if (e.target.checked) {
      dispatch(addToFavorite(data?.name.common));
      addToFav(data?.name.common);
    } else {
      dispatch(deleteFromFavorite(data?.name.common));
      removeFromFav(data?.name.common);
    }  
  };

  const checkIsFavorite = (commonName) => favoriteList.includes(commonName);

  return (
    <div style={{ margin: "20px 0" }}>
      <Card style={{ width: '250px' }}>
        <Card.Img 
          variant="top" 
          src={flag} 
          style={{ height: "200px" }}
        />
        <Card.Body>
          <Card.Title style={{ display: "flex", justifyContent: "space-between" }}>
            {commonName}
            <FavoriteHeart
              defaultChecked={checkIsFavorite(commonName)}
              onToggle={favoriteHandler}
            />
          </Card.Title> 

          <div>
            <div className='smallData'>
            
              <Tooltip text='Official Name'>
                <div className='icon-container'>
                  <img src={officialNameIcon} alt="officialName" className="tinyIcon" />
                </div>
              </Tooltip>

              <p>{officialName}</p>
            </div>
        
            <div className='smallData'>
              <Tooltip text='Population'>
                <div className='icon-container'>
                  <img src={populationIcon} alt="population" className="tinyIcon" />
                </div>
              </Tooltip>
              <p>{populationReader(population)}</p>
            </div>          

            <div className='smallData'>
               <Tooltip text='Capital'>
                <div className='Capital'>
                  <img src={capitalIcon} alt="capital" className="tinyIcon" />
                </div>
               </Tooltip>
              <p>{capital}</p>
            </div>

            <div className='smallData'>
               <Tooltip text='Languages'>
                <div className='icon-container'>
                  <img src={langIcon} alt="languages" className="tinyIcon" />
                </div>
               </Tooltip>

              <div className="repeatedSmallData">
                {Object.values(languages || {}).map((value, i) => (      
                  <p key={i}>{value}</p>
                ))}
              </div>
            </div>

            <div className='smallData'>
              <Tooltip text='Currencies'>
                <div className='icon-container'>
                  <img src={currencyIcon} alt="currencies" className="tinyIcon" />
                </div>
              </Tooltip>
              <div className="repeatedSmallData">
                {Object.values(currencies || {}).map((value, i) => (                     
                  <p key={i}>{value.name}</p>                      
                ))}
              </div>
            </div>
          </div>

          <Link to={url} 
          state={{ commonName,
              officialName,
              population,
              flag,
              capital,
              currencies,
              languages,
              data
            }} 
          style={{ textDecoration: 'none' }}>
            <Button variant="primary">More Info</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BSCard;
