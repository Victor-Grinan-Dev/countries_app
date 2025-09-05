import axios from "axios";

const baseUrl = "https://restcountries.com/v3.1/all?fields=name,flags,cca2,cca3,capital,population,languages,currencies";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

// eslint-disable-next-line
export default { getAll };
