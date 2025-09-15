import { createSlice } from "@reduxjs/toolkit";
import countryService from "../../services/countries";
// import { loadFavorites } from "../../hooks/useLocalStorage";


export const loadFavorites = () => {
  try {
    const item = window.localStorage.getItem("favoriteCountries");
    return item ? JSON.parse(item) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

const initialState = {
  favoriteCountries: loadFavorites(),
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {...initialState,
    countries: [],
    filteredCountries: [],
    isLoading: true,
    search: "",
  },

  reducers: {
    getCountries(state, action) {
      state.countries = action.payload;
    },
    setDataCountries(state, action) {
      state.dataCountries = action.payload;
    },
    setFilterDataCountries(state, action) {
      state.countries = action.payload;
    },

    isLoading(state, action) {
      state.isLoading = action.payload;
    },

    search(state, action) {
      state.search = action.payload;
    },

    addToFavorite(state, action) {
      if (
        action.payload &&                           // ✅ ignore null/undefined
        !state.favoriteCountries.includes(action.payload)
      ) {
        state.favoriteCountries.push(action.payload);
        window.localStorage.setItem(
          "favoriteCountries",
          JSON.stringify(state.favoriteCountries)
        );
      }
    },

    deleteFromFavorite(state, action) {
      const newArray = state.favoriteCountries.filter(item => item !== action.payload);
      state.favoriteCountries = newArray;
      window.localStorage.setItem(
        "favoriteCountries",
        JSON.stringify(state.favoriteCountries)
      );
    },

    setFavorites(state, action) {
      state.favoriteCountries = action.payload;
      window.localStorage.setItem(
        "favoriteCountries",
        JSON.stringify(state.favoriteCountries)
      );
    },
  },
});

export const initializeCountries = () => {
  return async (dispatch) => {
    const countries = await countryService.getAll();
    dispatch(getCountries(countries));
    dispatch(isLoading(false));
  };
};


export const {
  getCountries,
  isLoading,
  search,
  addToFavorite,
  deleteFromFavorite,
  setFavorites,
  setDataCountries,
  setFilterDataCountries,
} = countriesSlice.actions;

export const favoriteCountriesSelector = (state) =>
  state.countries.favoriteCountries;

export const favCountriesObjects = (state) =>
  state.countries.favCountriesObjects;

export default countriesSlice.reducer;
