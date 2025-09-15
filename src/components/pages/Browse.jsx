import BSCard from '../UIs/BSCard';
import { useSelector } from 'react-redux';

function Browse() {
  const countries = useSelector(state => {
    // console.log(state.countries.countries);
    return state.countries.countries;
  });
  // const [countriesWeather, setCountriesWeather] = useState({});

  // const [search, setSearch] = useState('');
  // const [loading, setLoading] = useState(false);

  // const searchHandler = (e) => {
  //   setSearch(e.target.value); 
  //   };

  return (
    <div className="browse" style={{ display: "flex", alignItems:'flex-start', gap:'10px', flexDirection: "row", backgroundColor:'#030303dc', minHeight: '100vh', maxHeight: '250%' }}>
      {countries && countries.map((country, index) => (
        <BSCard 
          key={index }
          commonName={country.name.common}
          officialName={country.name.official}
          population={country.population}
          flag={country.flags.png}
          capital={country.capital}
          currencies={country.currencies} 
          languages={country.languages}
          url={country.name.common}
          cc2={country.cca2}
          />
      ))}
    </div>
  );
};

export default Browse;
