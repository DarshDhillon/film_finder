import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_API_KEY;

export const getFilmDataAsync = createAsyncThunk(
  'films/getFilmDataAsync',
  async (filmID) => {
    const film = `https://api.themoviedb.org/3/movie/${filmID}?api_key=${API_KEY}&language=en-US&page=1&region=GB`;
    const filmActors = `https://api.themoviedb.org/3/movie/${filmID}/credits?api_key=${API_KEY}`;
    const filmImages = `https://api.themoviedb.org/3/movie/${filmID}/images?api_key=${API_KEY}`;

    const requestOne = await axios.get(film);
    const requestTwo = await axios.get(filmActors);
    const requestThree = await axios.get(filmImages);

    const allRequests = await axios
      .all([requestOne, requestTwo, requestThree])
      .then((responses) => {
        return {
          filmRes: responses[0].data,
          filmActorsRes: responses[1].data.cast,
          filmImagesRes: responses[2].data.backdrops,
        };
      })
      .catch((errors) => {
        console.error(errors);
      });

    return allRequests;
  }
);

export const getSearchedFilmsAsync = createAsyncThunk(
  'films/getSearchedFilmsAsync',
  async ({ searchQuery, pageNumber }) => {
    const { data } = await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${pageNumber}`
      )
      .catch((error) => console.error(error));

    return { searchedFilms: data, type: searchQuery, pageNumber: pageNumber };
  }
);

export const getFilmsByTypeAndPageAsync = createAsyncThunk(
  'films/getFilmsByTypeAsync',
  async ({ searchQuery, pageNumber }) => {
    const { data } = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${searchQuery}?api_key=${API_KEY}&language=en-US&page=${pageNumber}&region=GB`
      )
      .catch((error) => console.error(error));

    return {
      fetchedFilmsByType: data,
      type: searchQuery,
      pageNumber: pageNumber,
    };
  }
);

const filmsSlice = createSlice({
  name: 'films',
  initialState: {
    type: '',
    isLoading: true,
    films: [],
    totalResults: 0,
    currentPage: 1,
    searchedFilmsData: {
      type: '',
      totalResults: 0,
      currentPage: 1,
      isLoading: true,
      films: [],
    },
    selectedFilmData: {
      type: '',
      isLoading: true,
      selectedFilm: {},
      selectedFilmActors: [],
      selectedFilmImages: [],
    },
  },
  reducers: {
    clearSelectedFilm: (state) => {
      state.selectedFilmData = {
        isLoading: true,
        selectedFilm: {},
        selectedFilmActors: [],
        selectedFilmImages: [],
      };
    },
    setIsLoading: (state) => {
      state.isLoading = true;
    },
    setType: (state, { payload }) => {
      state.type = payload;
    },
  },
  extraReducers: {
    [getFilmDataAsync.pending]: (state) => {
      state.selectedFilmData.isLoading = true;
    },
    [getFilmDataAsync.fulfilled]: (state, { payload }) => {
      state.type = 'selected';
      state.selectedFilmData.selectedFilm = payload.filmRes;
      state.selectedFilmData.selectedFilmActors = payload.filmActorsRes;
      state.selectedFilmData.selectedFilmImages = payload.filmImagesRes;
      state.selectedFilmData.isLoading = false;
    },
    [getSearchedFilmsAsync.pending]: (state) => {
      state.searchedFilmsData.isLoading = true;
    },
    [getSearchedFilmsAsync.fulfilled]: (state, { payload }) => {
      state.type = 'searched';
      state.searchedFilmsData.type = payload.type;
      state.searchedFilmsData.currentPage = payload.pageNumber;
      state.searchedFilmsData.totalResults =
        payload.searchedFilms.total_results;
      state.searchedFilmsData.films = payload.searchedFilms.results;
      state.searchedFilmsData.isLoading = false;
    },
    [getFilmsByTypeAndPageAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [getFilmsByTypeAndPageAsync.fulfilled]: (state, { payload }) => {
      state.type = payload.type;
      state.films = payload.fetchedFilmsByType.results;
      state.currentPage = payload.pageNumber;
      state.totalResults = payload.fetchedFilmsByType.total_results;
      state.isLoading = false;
    },
  },
});

export const { clearSelectedFilm, setIsLoading, setType } = filmsSlice.actions;

export default filmsSlice.reducer;
