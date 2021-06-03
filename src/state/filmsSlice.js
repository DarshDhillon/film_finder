import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_API_KEY;

export const getFilmDataAsync = createAsyncThunk(
  'films/getFilmDataAsync',
  async (filmID) => {
    const film = `https://api.themoviedb.org/3/movie/${filmID}?api_key=${API_KEY}&language=en-US&page=1&region=GB`;
    const filmActors = `https://api.themoviedb.org/3/movie/${filmID}/credits?api_key=${API_KEY}`;
    const filmImages = `https://api.themoviedb.org/3/movie/${filmID}/images?api_key=${API_KEY}`;
    const filmRecommendations = `https://api.themoviedb.org/3/movie/${filmID}/recommendations?api_key=${API_KEY}`;

    const res1 = await fetch(film);
    const res2 = await fetch(filmActors);
    const res3 = await fetch(filmImages);
    const res4 = await fetch(filmRecommendations);

    const filmRes = await res1.json();
    const filmActorsRes = await res2.json();
    const filmImagesRes = await res3.json();
    const filmRecommendationsRes = await res4.json();

    return { filmRes, filmActorsRes, filmImagesRes, filmRecommendationsRes };
  }
);

export const getSearchedFilmsAsync = createAsyncThunk(
  'films/getSearchedFilmsAsync',
  async (searchQuery) => {
    const fetchedSearchFilms = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
    );

    const searchedFilms = await fetchedSearchFilms.json();

    return { searchedFilms, type: searchQuery };
  }
);

export const getFilmsByTypeAsync = createAsyncThunk(
  'films/getFilmsByTypeAsync',
  async (searchTerm) => {
    const fetchedFilmsByType = await fetch(
      `https://api.themoviedb.org/3/movie/${searchTerm}?api_key=${API_KEY}&language=en-US&page=1&region=GB`
    );

    const filmsByType = await fetchedFilmsByType.json();

    return { filmsByType, type: searchTerm };
  }
);

const filmsSlice = createSlice({
  name: 'films',
  initialState: {
    type: '',
    isLoading: true,
    films: [],
    searchedFilmsData: {
      isLoading: true,
      films: [],
    },
    selectedFilmData: {
      isLoading: true,
      selectedFilm: {},
      selectedFilmActors: [],
      selectedFilmImages: [],
      selectedFilmRecommendations: [],
    },
  },
  reducers: {
    clearSelectedFilm: (state) => {
      state.selectedFilmData = {
        isLoading: true,
        selectedFilm: {},
        selectedFilmActors: [],
        selectedFilmImages: [],
        selectedFilmRecommendations: [],
      };
    },
    setIsLoading: (state) => {
      state.isLoading = true;
    },
  },
  extraReducers: {
    [getFilmDataAsync.pending]: (state) => {
      state.selectedFilmData.isLoading = true;
    },
    [getFilmDataAsync.fulfilled]: (state, { payload }) => {
      state.type = '';
      state.selectedFilmData.selectedFilm = payload.filmRes;
      state.selectedFilmData.selectedFilmActors = payload.filmActorsRes;
      state.selectedFilmData.selectedFilmImages = payload.filmImagesRes;
      state.selectedFilmData.selectedFilmRecommendations =
        payload.filmRecommendationsRes;
      state.selectedFilmData.isLoading = false;
    },
    [getSearchedFilmsAsync.pending]: (state) => {
      state.searchedFilmsData.isLoading = true;
    },
    [getSearchedFilmsAsync.fulfilled]: (state, { payload }) => {
      state.type = payload.type;
      state.searchedFilmsData.films = payload.searchedFilms.results;
      state.searchedFilmsData.isLoading = false;
    },
    [getFilmsByTypeAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [getFilmsByTypeAsync.fulfilled]: (state, { payload }) => {
      state.type = payload.type;
      state.films = payload.filmsByType.results;
      state.isLoading = false;
    },
  },
});

export const { clearSelectedFilm, setIsLoading } = filmsSlice.actions;

export default filmsSlice.reducer;
