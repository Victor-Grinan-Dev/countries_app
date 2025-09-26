export async function getOpenWeather(city, isCelsius=true) {
const apiKey = ACCESS_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY
const url = `api.openweathermap.org/data/2.5/forecast?q=${city}${isCelsius && "&units=metric"}&appid=${apiKey}`

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`OpenWeather error: ${res.status}`);
    }
    const data = await res.json();
    return data; 
  } catch (err) {
    console.error(err);
    return null;
  }
}