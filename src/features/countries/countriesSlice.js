import { createSlice } from "@reduxjs/toolkit";
import countryService from "../../services/countries";

export const loadFavorites = () => {
  try {
    const item = window.localStorage.getItem("favoriteCountries");
    return item ? JSON.parse(item) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

const initialState = {
  favoriteCountries: loadFavorites(),
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    ...initialState,
    countries: [],
    filteredCountries: [],
    isLoading: true,
    search: "",
    sortBy: "", // new field for sorting
  },

  reducers: {
    getCountries(state, action) {
      state.countries = action.payload;
      state.filteredCountries = action.payload;
    },

    setDataCountries(state, action) {
      state.dataCountries = action.payload;
    },

    setFilterDataCountries(state, action) {
      state.filteredCountries = action.payload;
    },

    isLoading(state, action) {
      state.isLoading = action.payload;
    },

    search(state, action) {
      state.search = action.payload;
      state.filteredCountries = state.countries.filter((country) =>
        country.name.common.toLowerCase().includes(action.payload.toLowerCase())
      );
    },

    sortCountries(state, action) {
      state.sortBy = action.payload;
      let sorted = [...state.filteredCountries];

      switch (action.payload) {
        case "name":
          sorted.sort((a, b) => a.name.common.localeCompare(b.name.common));
          break;
        case "population":
          sorted.sort((a, b) => a.population - b.population);
          break;
        case "capital":
          sorted.sort((a, b) =>
            (a.capital[0] || "").localeCompare(b.capital[0] || "")
          );
          break;
        default:
          break;
      }

      state.filteredCountries = sorted;
    },

    addToFavorite(state, action) {
      if (
        action.payload &&
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
      const newArray = state.favoriteCountries.filter(
        (item) => item !== action.payload
      );
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
    dispatch(sortCountries("name")); // ✅ initialize sorted by name
    dispatch(isLoading(false));
  };
};

export const {
  getCountries,
  isLoading,
  search,
  sortCountries,
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
