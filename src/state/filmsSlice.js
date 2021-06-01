import { createSlice } from '@reduxjs/toolkit';

const filmsSlice = createSlice({
  name: 'fetched film(s)',
  initialState: {
    films: [],
    searchedFilms: [],
    type: '',
    selectedFilmData: {
      selectedFilm: {},
      selectedFilmActors: [],
      selectedFilmImages: [],
      selectedFilmRecommendations: [],
    },
  },
  reducers: {
    addFilms: (state, { payload }) => {
      state.type = payload.type;
      state.films = payload.filmList;
    },
    addSearchedFilms: (state, { payload }) => {
      state.type = payload.type;
      state.searchedFilms = payload.filmList;
    },
    addSelectedFilm: (state, { payload }) => {
      state.type = payload.type;
      state.selectedFilmData.selectedFilm = payload.selectedFilm;
      state.selectedFilmData.selectedFilmActors = payload.selectedFilmActors;
      state.selectedFilmData.selectedFilmImages = payload.selectedFilmImages;
      state.selectedFilmData.selectedFilmRecommendations =
        payload.selectedFilmRecommendations;
    },
  },
});

export const { addFilms, addSearchedFilms, addSelectedFilm } =
  filmsSlice.actions;

export default filmsSlice.reducer;
