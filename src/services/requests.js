import axios from "axios";

// const API_URL = "http://localhost:3001";
const LIVE_API_URL = "https://countries-app-eta-nine.vercel.app/";

export const httpGetALLCountries = async () => {
  const response = await axios.get(LIVE_API_URL + "/allcountries");
  // console.log(response.data);//Working
  return response.data;
};

export const httpGetALLFavCountries = async () => {
  const response = await axios.get(LIVE_API_URL + "/favcountries");
  return response.data;
};

export const httpGetFilterCountries = async () => {
  const response = await axios.get(LIVE_API_URL + "/countriesfilter");
  return response.data;
};
